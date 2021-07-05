import http from "./http-common";

const create = data => {
  return http.post("/GenerateLicense", data);
};
const login_validation = data => {
  return http.post("/token/user", data);
};

export default {
 
  create,
  login_validation
};