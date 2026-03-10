import express from "express";
import { uploadImage } from "../controllers/upload.controller";
import upload from "../config/multer";

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);

export default router;