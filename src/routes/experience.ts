import { Router } from "express";
import { ExperienceController } from "../controllers/experience.controller";

const router = Router()

router.get('/', ExperienceController.getAll)
router.get('/:id', ExperienceController.show)
router.post('/', ExperienceController.create)
router.put('/:id', ExperienceController.update)
router.delete('/:id', ExperienceController.delete)

export default router;