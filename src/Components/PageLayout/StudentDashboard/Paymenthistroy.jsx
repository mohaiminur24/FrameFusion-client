import React, { useContext, useEffect, useState } from "react";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import LoadingPage from "../../reusedComponents/LoadingPage";

const Paymenthistroy = () => {
  const [history, setHistory] = useState(null);
  const { user } = useContext(AuthContext);
  const [loadpage, setLoadpage] = useState(true);
  const axiosSecure = AxiosFetch();
  useEffect(() => {
    axiosSecure(`/userpaymenthistory?email=${user?.email}`).then((res) =>
      setHistory(res.data),
      setLoadpage(false)
    );
  }, [user]);
  
  if(loadpage){
    return <LoadingPage/>
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history &&
              history.map((cls, index) => {
                return (
                  <>
                    <tr className="font-Raleway text-xs">
                      <th>{index+1}</th>
                      <td>
                        <h1 className="text-lg font-semibold">{cls.ClassName}</h1>
                        <h1><span className="font-Inter font-semibold text-sm">Instractor:</span> {cls.InstractorName}</h1>
                        <h1><span className="font-Inter font-semibold text-sm">Email:</span> {cls.instractorEmail}</h1>
                      </td>
                      <td>
                        <h1><span className="font-Inter font-semibold">Payment ID:</span> {cls.paymentID}</h1>
                        <h1><span className="font-Inter font-semibold">Pay email:</span> {cls.payEmail}</h1>
                        <h1><span className="font-Inter font-semibold">Price:</span> ${cls.price}</h1>
                      </td>
                      <td className="font-bold text-primary">{cls.paymentstatus}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paymenthistroy;
