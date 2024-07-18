import User from "../../models/user/schema.js";

export const getAllUsers = async (req, res, next) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    let data = await User.find({}).populate({
      path: "user",
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort,
      },
    });
    res.status(201).json({ data: [...data], success: true });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id, username, password } = req.body;
    await User.updateOne({ _id: id }, { username, password });
    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await User.delete({ _id: id });
    res.status(201).json({ message: "User removed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default {
  getAllUsers,
  registerUser,
  updateUser,
  getUserInfo,
  deleteUser,
};
