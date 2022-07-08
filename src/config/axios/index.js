import axios from "axios";
// import { getJwtToken } from "@/helpers/jwt/index.js";

const value = `; ${document.cookie}`;
const parts = value.split(`jwt_token=`);
export const token = parts.length === 2 ? parts.pop().split(";").shift() : null;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 3000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + token,
    },
});

export default axiosInstance;
