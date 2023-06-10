import { useContext } from "react";
import { AuthContext } from "../AuthLayout/AuthancationContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const AxiosFetch = () => {
    const {Logoutuser} = useContext(AuthContext);
    const navigate = useNavigate();

     const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000/',
    });

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.authorize = `Bearer ${token}`;
            };
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response)=> response,
            async (error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await Logoutuser();
                    navigate('/loginPage');
                }
                return Promise.reject(error);
            }
        );
    })
    
    return axiosSecure;

};

export default AxiosFetch;