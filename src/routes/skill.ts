import { Router } from "express";
import { SkillController } from "../controllers/skill.controller";
import { loginMiddleware } from "../middleware/login.middleware";

const router = Router();

router.get('/', SkillController.getAll)
router.get('/by-categories/:categoryId', SkillController.getByCategory)
router.get('/:id', SkillController.show)
router.post('/', loginMiddleware, SkillController.create)
router.put('/:id', loginMiddleware, SkillController.update)
router.delete('/:id', loginMiddleware, SkillController.delete)

export default router;