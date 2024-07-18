import services from "./service.js";

const getAllUsers = async (req, res, next) => {
  services.getAllUsers(req, res, next);
};

const registerUser = async (req, res) => {
  services.registerUser(req, res);
};

const updateUser = async (req, res) => {
  services.updateUser(req, res);
};

const getUserInfo = async (req, res) => {
  services.getUserInfo(req, res);
};

const deleteUser = async (req, res) => {
  services.deleteUser(req, res);
};

export default {
  getAllUsers,
  registerUser,
  updateUser,
  deleteUser,
  getUserInfo,
};
