import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-71c9a/us-central1/api",
});

export default instance;
