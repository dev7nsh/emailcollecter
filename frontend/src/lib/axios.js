import axios from "axios"


export const axiosIntance = axios.create({
    baseURL:"https://backendemail-cf1o.onrender.com/api",
    withCredentials: true,
});