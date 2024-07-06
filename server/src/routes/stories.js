import express from "express";
import storiesController from "../controllers/stories/controller.js";

const router = express.Router();
router.get("/stories", storiesController.getAllStories);

export default router;