import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthLayout/AuthancationContext";
import AxiosFetch from "./AxiosFetch";

const UserRole =  () => {
  const [userpower, setUserPower] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosFetch();
  const fetchingrole = async()=>{
    const result =await axiosSecure(`/loadcurrentuser?email=${user?.email}`);
    setUserPower(result.data.role);
  }

  useEffect(()=>{
    fetchingrole();
  },[user])
  
  return [userpower];
};

export default UserRole;
