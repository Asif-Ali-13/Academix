import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.dir(config, { depth: null });

    console.log(`hello from axiosInstance : `, JSON.stringify(config, null, 2));
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
