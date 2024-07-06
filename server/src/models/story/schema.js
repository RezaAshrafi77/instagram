import mongoose from "mongoose";
const { Schema } = mongoose;

const ID = mongoose.Schema.Types.ObjectId;
const storySchema = new Schema(
  {
    user: {
      username: String,
      picFileId: { type: ID, ref: "File" },
    },
    fileId: { type: ID, ref: "File" },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model("Story", storySchema);
export default Story;
