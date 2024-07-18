import Hashtag from "../../models/hashtag/schema.js";

const getAllHashtags = async () => {
  const hashtags = await Hashtag.find({});
  console.log(hashtags);
};

export default {
  getAllHashtags
};
