import { NextFunction, Request, Response } from "express";
import { successResponse } from "../middleware/response.middleware";
import { Skill } from "../models/skill.model";

export const SkillController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skill = await Skill.create(req.body)
            successResponse(res, skill, "Skill created successfully", 201)
        } catch (error) {
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!skill) {
                return res.status(404).json({ message: "Skill not found" })
            }
            successResponse(res, skill, 'Skill updated successfully')
        }
        catch (error) {
            next(error)
        }
    },
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skills = await Skill.find()
            successResponse(res, skills, 'Skills retrieved successfully')
        } catch (error) {
            next(error)
        }
    },
    getByCategory: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skills = await Skill.find({categoryId: req.params.categoryId})
            successResponse(res, skills, 'Skills retrieved successfully')
        } catch (error) {
            next(error)
        }
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skill = await Skill.findById(req.params.id)
            if (!skill) {
                return res.status(404).json({ message: "Skill not found" })
            }
            successResponse(res, skill, 'Skill retrieved successfully')
        } catch (error) {
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skill = await Skill.findByIdAndDelete(req.params.id)
            if (!skill) {
                return res.status(404).json({ message: "Skill not found" })
            }
            successResponse(res, null, "Skill deleted successfully", 200)
        } catch (error) {
            next(error)
        }
    }
}