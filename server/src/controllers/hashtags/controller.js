import Hashtag from "../../models/hashtag/schema.js";

const getAllHashtags = async (req, res, next) => {
  const hashtags = await Hashtag.find({});
  console.log(hashtags);
};

export default { getAllHashtags };