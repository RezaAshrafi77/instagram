import mongoose from "mongoose";
const { Schema } = mongoose;

const ID = mongoose.Schema.Types.ObjectId;
const postSchema = new Schema(
  {
    user: {
      username: String,
      picFileId: { type: ID, ref: "File" },
    },
    fileIds: [{ type: ID, ref: "File" }],
    description: String,
    tags: [{ type: { type: ID, ref: "User" } }],
    hashtags: [{ type: String }],
    location: String,
    comments: [
      {
        user: {
          username: String,
          picFileId: { type: ID, ref: "File" },
        },
        text: String,
      },
    ],
    likes: [
      {
        username: String,
        picFileId: { type: ID, ref: "File" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
