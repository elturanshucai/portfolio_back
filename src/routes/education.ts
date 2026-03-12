import { Router } from "express";
import { EducationController } from "../controllers/education.controller";
import { loginMiddleware } from "../middleware/login.middleware";

const router = Router()

router.get('/', EducationController.getAll)
router.get('/:id', EducationController.show)
router.post('/', loginMiddleware, EducationController.create)
router.put('/:id', loginMiddleware, EducationController.update)
router.delete('/:id', loginMiddleware, EducationController.delete)

export default router;