import { Router } from "express";
import categoryRoutes from "./category";
import skillRoutes from "./skill";
import educationRoutes from "./education";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/skills", skillRoutes);
router.use("/educations", educationRoutes);

export default router;