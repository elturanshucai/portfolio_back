import { Router } from "express";
import { EducationController } from "../controllers/education.controller";

const router = Router()

router.get('/', EducationController.getAll)
router.get('/:id', EducationController.show)
router.post('/', EducationController.create)
router.put('/:id', EducationController.update)
router.delete('/:id', EducationController.delete)

export default router;