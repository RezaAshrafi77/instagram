import User from "../../models/user/schema.js";
import jwt from "jsonwebtoken";

const loginUser = async (req,res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.SECRET_KEY,
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
}

export default {
  loginUser
}