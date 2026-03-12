import { Router } from "express";
import { SkillController } from "../controllers/skill.controller";

const router = Router();

router.get('/', SkillController.getAll)
router.get('/by-categories/:categoryId', SkillController.getByCategory)
router.get('/:id', SkillController.show)
router.post('/', SkillController.create)
router.put('/:id', SkillController.update)
router.delete('/:id', SkillController.delete)

export default router;