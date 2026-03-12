import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
import { loginMiddleware } from "../middleware/login.middleware";

const router = Router()

router.get('/', ProjectController.getAll)
router.get('/:id', ProjectController.show)
router.post('/',loginMiddleware, ProjectController.create)
router.put('/:id',loginMiddleware, ProjectController.update)
router.delete('/:id',loginMiddleware, ProjectController.delete)

export default router;