import express from "express";
import hashtagsController from "../controllers/hashtags/controller.js";

const router = express.Router();
router.get("/hashtags", hashtagsController.getAllHashtags);

export default router;