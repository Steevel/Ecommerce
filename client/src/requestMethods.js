import axios from "axios";

let TOKEN = null;

try {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
    .currentUser.accessToken;
} catch (e) {
  console.log(e.message);
}

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
