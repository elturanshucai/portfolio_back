import { Router } from "express";
import categoryRoutes from "./category";
import skillRoutes from "./skill";
import educationRoutes from "./education";
import experienceRoutes from "./experience";
import projectRoutes from "./project"
import uploadRoute from './upload'
import userRoute from './user'

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/skills", skillRoutes);
router.use("/educations", educationRoutes);
router.use("/experiences", experienceRoutes);
router.use("/projects", projectRoutes);
router.use("/upload", uploadRoute)
router.use("/user", userRoute)

export default router;