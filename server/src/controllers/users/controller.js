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
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, username, password } = req.body;
    await User.updateOne({ _id: id }, { username, password });
    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await User.delete({_id: id});
    res.status(201).json({ message: "User removed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default { getAllUsers, registerUser, updateUser, deleteUser };
