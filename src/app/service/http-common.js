import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:43392/api",
  headers: {
    "Content-type": "application/json"
  }
});