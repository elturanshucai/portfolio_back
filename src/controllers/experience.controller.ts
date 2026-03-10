import { Request, Response, NextFunction } from "express";
import { successResponse } from "../middleware/response.middleware";
import { Experience } from "../models/experience.model";

export const ExperienceController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const experience = await Experience.create(req.body)
            successResponse(res, experience, 'Experience created')
        } catch (error) {
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!experience) {
                return res.status(404).json({ message: 'Experience not found' })
            }
            successResponse(res, experience, 'Experience updated')
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const experiences = await Experience.find().populate('skills')
            successResponse(res, experiences, 'Experiences list')
        } catch (error) {
            next(error)
        }
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const experience = await Experience.findById(req.params.id).populate('skills')
            if (!experience) {
                return res.status(404).json({ message: 'Experience not found' })
            }
            successResponse(res, experience, 'Experience found')
        } catch (error) {
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const experience = await Experience.findByIdAndDelete(req.params.id)
            if (!experience) {
                return res.status(404).json({ message: 'Experience not found' })
            }
            successResponse(res, null, 'Experience deleted')
        } catch (error) {
            next(error)
        }
    }
}