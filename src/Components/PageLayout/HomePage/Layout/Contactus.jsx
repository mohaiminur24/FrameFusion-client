import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../reusedComponents/SectionTitle";
import AxiosFetch from "../../../CustomHook/AxiosFetch";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";

const Contactus = () => {
  const { user } = useContext(AuthContext);
  const [instractor, setInstractor] = useState(null);
  const axiosSecure = AxiosFetch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  useEffect(() => {
    axiosSecure("/popularinstractor").then((res) => setInstractor(res.data));
  }, []);

  const handlesubmitmessage = async (data) => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login your account!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const result = await axiosSecure.post("/instractormessage", { data });
    if (result.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been send",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };
  return (
    <div>
      <SectionTitle
        title="Contact with Instractor"
        description="Have a question, feedback, or simply want to get in touch? We'd love to hear from you! Our dedicated team is here to assist you with any inquiries you may have. Whether you need assistance with a product, want to discuss a collaboration opportunity, or have a general inquiry, we're just a message away. Fill out the form below, and we'll make sure to respond promptly."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <img
          className="w-4/5 mx-auto"
          src="https://www.chubb.com/content/dam/chubb-sites/chubb/global/images/illustrations/Find-an-Agent_Illustration_Black_Fullsize-resized-v1.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
          alt=""
        />
        <div>
          <form
            onSubmit={handleSubmit(handlesubmitmessage)}
            className="font-Raleway space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("name", { required: true })}
                  className="text-sm border-b outline-none w-full px-3 py-1"
                  placeholder="name"
                  type="text"
                  name="name"
                  id="subject"
                />
              </div>
              <div>
                <select
                  {...register("to", { required: true })}
                  className="text-sm border-b outline-none w-full px-3 py-1"
                  name="to"
                  id="to"
                >
                  {instractor &&
                    instractor.map((ins, index) => (
                      <option value={ins.email}>{ins.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div>
              <input
                {...register("subject", { required: true })}
                className="text-sm border-b w-full outline-none px-3 py-1"
                placeholder="Subject"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
            <div>
              <textarea
                {...register("description", { required: true })}
                className="text-sm border-b max-h-48 min-h-16 rounded-md outline-none w-full px-3 py-1"
                placeholder="Description"
                name="description"
                id="description"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <input
              className="w-full py-2 bg-primary text-white rounded-md shadow-md"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
