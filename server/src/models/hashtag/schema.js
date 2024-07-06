import mongoose from "mongoose";
const { Schema } = mongoose;

const hashtagSchema = new Schema(
  {
    hashtag: {type : String, unique: true},
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model("Hashtag", hashtagSchema);
export default Story;
