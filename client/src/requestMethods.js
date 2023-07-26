import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjRkMTUwNWM4NGQxNjBmOTU3N2UzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDI3NzI5MCwiZXhwIjoxNjkwNTM2NDkwfQ.WPAx9b82t5INivJBwYMZ5q4ZI7--LH-R73r6E9DG9eE";

const config = {
  headers: {
    token: `Bearer ${TOKEN}`,
  },
};

const BASE_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
