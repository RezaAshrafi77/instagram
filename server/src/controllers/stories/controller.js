import Story from "../../models/story/schema.js";

const getAllStories = async (req, res, next) => {
  const stories = await Story.find({});
  console.log(stories);
};

export default { getAllStories };