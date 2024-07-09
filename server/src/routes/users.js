import express from "express";
import usersController from "../controllers/users/controller.js";

const api_url = "/api/user";
const router = express.Router();
// get all users
router.get(api_url + "/all", usersController.getAllUsers);

// user registration
router.post(api_url + "/register", usersController.registerUser);

// user registration
router.put(api_url + "/update", usersController.updateUser);

// user registration
router.delete(api_url + "/delete", usersController.deleteUser);

export default router;
