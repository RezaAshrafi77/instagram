import Post from "../../models/post/schema.js";

const getAllPosts = async () => {
  const posts = await Post.find({});
  console.log(posts);
};

export default {
  getAllPosts,
};
