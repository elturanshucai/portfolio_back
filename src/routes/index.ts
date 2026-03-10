import { Router } from "express";
import categoryRoutes from "./category";
import skillRoutes from "./skill";
import educationRoutes from "./education";
import experienceRoutes from "./experience";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/skills", skillRoutes);
router.use("/educations", educationRoutes);
router.use("/experiences", experienceRoutes);

export default router;