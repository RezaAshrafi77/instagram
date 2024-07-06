import User from "../../models/user/schema.js";

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  console.log(users);
};

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

export default { getAllUsers, registerUser };
