import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import LoadingPage from "../../reusedComponents/LoadingPage";
import { motion } from "framer-motion";
import { Fade, Bounce } from "react-awesome-reveal";

const EnrollClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [saveclass, setSaveClass] = useState(null);

  if (loading) {
    return <LoadingPage />;
  }
  useEffect(() => {
    const saveclass = JSON.parse(localStorage.getItem(user?.email));
    setSaveClass(saveclass);
  }, [user]);

  //Delete enroll class function is here
  const managedeleteclass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const getitems = JSON.parse(localStorage.getItem(user.email));
        const filter = getitems.filter((cls) => cls._id !== id);
        localStorage.setItem(user.email, JSON.stringify(filter));
        setSaveClass(filter);
        Swal.fire("Deleted!", "Your class has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>index</th>
              <th>Class Name</th>
              <th>Details</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {saveclass &&
              saveclass.map((clss, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={clss.thumbnail} />
                            </div>
                          </div>
                          <div>
                            <Fade className="font-bold" delay={1e3} cascade damping={1e-1}>{clss.ClassName}</Fade>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h1>{clss.InstractorName}</h1>
                        <h1>{clss.instractorEmail}</h1>
                      </td>
                      <Fade><td>${clss.price}</td></Fade>
                      <th>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => managedeleteclass(clss._id)}
                          className="px-4 py-2 bg-red-500 rounded-md shadow-md text-white mr-5 hover:bg-red-700"
                        >
                          Delete
                        </motion.button>
                        <PrimaryButton
                          text="Pay"
                          direction={`/Dashboard/payment/${clss._id}`}
                        />
                      </th>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrollClasses;
