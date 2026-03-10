import { Router } from "express";
import categoryRoutes from "./category";
import skillRoutes from "./skill";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/skills", skillRoutes);

export default router;