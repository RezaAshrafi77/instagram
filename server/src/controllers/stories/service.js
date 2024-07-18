import Story from "../../models/story/schema.js";

const getStories = async () => {
  const stories = await Story.find({});
  console.log(stories);
};

export default {
  getStories,
};
