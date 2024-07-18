import services from "./service.js";

const getAllStories = () => {
  services.getStories();
};

export default { getAllStories };