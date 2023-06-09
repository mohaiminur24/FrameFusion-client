import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthLayout/AuthancationContext";

const LoadInstractorClass = () => {
    const {user,loading} = useContext(AuthContext);
    const {refetch , data: classes=[]} = useQuery({
            queryKey:['instractorclass', user?.email ],
            enabled: !loading,
            queryFn: async()=>{
                const result =await fetch(`http://localhost:5000/instractorclass?email=${user?.email}`)
                return result.json();
            }
    });

    return[refetch,classes];
};

export default LoadInstractorClass;