import { useQuery } from "react-query";
import AxiosFetch from "./AxiosFetch";

const LoadAlluser = () => {
    const axiosSecure = AxiosFetch();
    const {refetch, data: users=[]} = useQuery({
        queryFn:async()=>{
            const result = await axiosSecure.get('/allusermanagement');
            return result.data;
        }
    });
    return [refetch, users];
};

export default LoadAlluser;