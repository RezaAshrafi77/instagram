import mongoose from "mongoose";
const { Schema } = mongoose;

const ID = mongoose.Schema.Types.ObjectId;
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, index: true },
    email: String,
    password: String,
    picFileId: { type: ID, ref: "File" },
    birthDate: Date,
    followers: [{ username: String, profileImage: String }],
    followings: [{ username: String, profileImage: String }],
    posts: [{ type: ID, ref: "Post" }],
    bookmarks: [{ type: ID, ref: "Bookmark" }],
    stories: [{ type: ID, ref: "Story" }],
    highlights: [{ type: ID, ref: "Highlight" }],
  },
  {
    timestamps: true,
  }
);

// Hash the user's password before saving it
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
})

// Compare user's entered password with the stored hash
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);
export default User;