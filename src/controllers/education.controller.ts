import { Request, Response, NextFunction } from 'express'
import { Education } from '../models/education.model'
import { successResponse } from '../middleware/response.middleware'

export const EducationController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const education = await Education.create(req.body)
            successResponse(res, education, 'Education created')
        } catch (error) {
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!education) {
                return res.status(404).json({ message: 'Education not found' })
            }
            successResponse(res, education, 'Education updated successfully')
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const educations = await Education.find()
            successResponse(res, educations, 'Educations list')
        } catch (error) {
            next(error)
        }
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!education) {
                return res.status(404).json({ message: 'Education not found' })
            }
            successResponse(res, education, 'Successfull')
        } catch (error) {
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const education = await Education.findByIdAndDelete(req.params.id)
            if (!education) return res.status(404).json({ message: 'Education not found' });
            successResponse(res, null, 'Education deleted')
        } catch (error) {
            next(error)
        }
    }
}