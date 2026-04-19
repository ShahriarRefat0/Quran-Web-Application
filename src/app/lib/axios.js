import axios from "axios";

const quranApiBaseUrl =
    process.env.QURAN_API_BASE_URL ||
    process.env.NEXT_PUBLIC_QURAN_API_BASE_URL ||
    process.env.BASE_URL ||
    "https://api.alquran.cloud/v1";

const axiosInstance = axios.create({
    baseURL: quranApiBaseUrl,
    timeout: 15000,
});

export default axiosInstance;