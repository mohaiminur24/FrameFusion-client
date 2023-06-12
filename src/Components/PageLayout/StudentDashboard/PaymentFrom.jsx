import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import { useNavigate } from "react-router-dom";

const PaymentFrom = ({ price, payclass }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = AxiosFetch();
  const [clientSecret, setClicentSecret] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/createpaymentintent", { price }).then((res) => {
      setClicentSecret(res.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: errorpayemnt } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown user",
            email: user?.email || "unothorize user",
          },
        },
      });

    if (errorpayemnt) {
      console.log(errorpayemnt);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
      setloading(false);
    } else if (paymentIntent) {
      if (paymentIntent) {
        const payemthistroy = {
          paymentID: paymentIntent.id,
          paymentstatus: paymentIntent.status,
          payEmail: user?.email,
          ClassName: payclass.ClassName,
          InstractorName: payclass.InstractorName,
          instractorEmail: payclass.instractorEmail,
          price: payclass.price,
          InstractorName: payclass.InstractorName,
        };
        const result = await axiosSecure.post(
          "/createpaymenthistory",
          payemthistroy
        );
        if (result.data.insertedId) {
          // localstorage management\
          const getclass = JSON.parse(localStorage.getItem(user?.email));
          if (getclass) {
            const filter = getclass.filter((cls) => cls._id !== payclass._id);
            localStorage.setItem(user?.email, JSON.stringify(filter));
          }
          const updatethisclass = await axiosSecure.post(
            `/updateclassafterpayment?id=${payclass._id}`
          );
          if (updatethisclass.data.modifiedCount) {
            const result = await axiosSecure.patch(
              `updatestudentinstractor?email=${payclass.instractorEmail}`
            );
            if (result.data.modifiedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment successfully Done",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/Dashboard/myselectclass");
              setloading(false);
            }
          }
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border px-5 py-2 rounded-md w-full"
          options={{
            style: {
              base: {
                fontSize: "12px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-5 py-2 font-Raleway text-sm bg-primary rounded-md shadow-md mt-3 text-white disabled:opacity-30"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          Pay Bill
        </button>
      </form>
    </>
  );
};

export default PaymentFrom;
