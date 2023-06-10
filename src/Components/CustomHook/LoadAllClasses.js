import { useQuery } from "react-query";
import AxiosFetch from "./AxiosFetch";


const LoadAllClasses = () => {
    const axiosSecure = AxiosFetch();
    const {refetch , data: classes=[]} = useQuery({
        queryFn: async()=>{
            const result = await axiosSecure('/loadallclasses');
            return result.data;
        }
    })
    return [refetch, classes];
};

export default LoadAllClasses;