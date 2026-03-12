import express from "express";
import { uploadImage } from "../controllers/upload.controller";
import upload from "../config/multer";
import { loginMiddleware } from "../middleware/login.middleware";

const router = express.Router();

router.post("/", loginMiddleware, upload.single("image"), uploadImage);

export default router;