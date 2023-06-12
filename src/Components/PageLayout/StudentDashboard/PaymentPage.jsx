import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PaymentFrom from "./PaymentFrom";
import { loadStripe } from "@stripe/stripe-js";

const stipePromise = loadStripe(import.meta.env.VITE_payment_strip_key);

const PaymentPage = () => {
  const payclass = useLoaderData();

  return (
    <div className="w-11/12 mx-auto text-center">
      <h1 className="text-2xl font-Raleway shadow-sm py-3 font-bold mb-5">
        Order Summary and Payment
      </h1>
      <div className="w-full mt-10 flex justify-center items-center gap-5">
        <div className="w-full text-left border-r">
            <img className="w-2/5 mb-3 rounded-sm" src={payclass.thumbnail} alt="" />
            <h1 className="font-bold font-Inter text-lg">{payclass.ClassName}</h1>
            <h2 className="text-sm font-Raleway"><span className="font-Inter text-base font-semibold">Instractor: </span>{payclass.InstractorName}</h2>
            <h2 className="text-sm font-Raleway"><span className="font-Inter text-base font-semibold">Email: </span>{payclass.instractorEmail}</h2>
            <h2 className="text-sm font-Raleway"><span className="font-Inter text-base font-semibold">Price: </span>${payclass.price}</h2>
        </div>
        <div className="w-full">
          <Elements stripe={stipePromise}>
            <PaymentFrom payclass={payclass} price={payclass.price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
