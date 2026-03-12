import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { loginMiddleware } from "../middleware/login.middleware";

const router = Router();

router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.show);
router.post("/", loginMiddleware, CategoryController.create);
router.put("/:id", loginMiddleware, CategoryController.update);
router.delete("/:id", loginMiddleware, CategoryController.delete);

export default router;