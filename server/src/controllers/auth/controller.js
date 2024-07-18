import services from "./service.js";

const loginUser = (req, res) => {
  services.loginUser(req, res);
};

export default { loginUser };