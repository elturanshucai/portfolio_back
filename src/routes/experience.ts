import { Router } from "express";
import { ExperienceController } from "../controllers/experience.controller";
import { loginMiddleware } from "../middleware/login.middleware";

const router = Router()

router.get('/', ExperienceController.getAll)
router.get('/:id', ExperienceController.show)
router.post('/', loginMiddleware, ExperienceController.create)
router.put('/:id', loginMiddleware, ExperienceController.update)
router.delete('/:id', loginMiddleware, ExperienceController.delete)

export default router;