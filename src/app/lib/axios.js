import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "https://api.alquran.cloud/v1",
    timeout: 5000,
})

export default axiosInstance;