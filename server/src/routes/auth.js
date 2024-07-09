import express from "express";
import authController from "../controllers/auth/controller.js";
import authenticateToken from "../middleware/authentication.js"

const router = express.Router();
// user login
router.post("/login", authController.loginUser);

// Protected route example
router.get('/protected', authenticateToken, (req, res, next) => {
  // Your protected route logic here
  res.json({ message: 'This is a protected route' });
  next();
});

export default router;