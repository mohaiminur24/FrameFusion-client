import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthLayout/AuthancationContext";
import AxiosFetch from "./AxiosFetch";

const LoadInstractorClass = () => {
    const axiosSecure = AxiosFetch();
    const {user,loading} = useContext(AuthContext);
    const {refetch , data: classes=[]} = useQuery({
            queryKey:['instractorclass', user?.email ],
            enabled: !loading,
            queryFn: async()=>{
                const result =await axiosSecure(`/instractorclass?email=${user?.email}`)
                return result.data;
            }
    });

    return[refetch,classes];
};

export default LoadInstractorClass;