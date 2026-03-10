import { Request, Response, NextFunction } from "express";
import { Project } from "../models/project.model";
import { successResponse } from "../middleware/response.middleware";

export const ProjectController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const project = await Project.create(req.body)
            successResponse(res, project, "Project created successfully")
        } catch (error) {
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!project) {
                return res.status(404).json({ message: "Project not found" })
            }
            successResponse(res, project, "Project updated successfully")
        } catch (error) {
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const project = await Project.findByIdAndDelete(req.params.id)
            if (!project) {
                return res.status(404).json({ message: "Project not found" })
            }
            successResponse(res, project, "Project deleted successfully")
        } catch (error) {
            next(error)
        }
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const project = await Project.findById(req.params.id).populate("experience", "name").populate("skills", "name")
            if (!project) {
                return res.status(404).json({ message: "Project not found" })
            }
            successResponse(res, project, "Project retrieved successfully")
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const projects = await Project.find().populate("experience", "name").populate("skills", "name")
            successResponse(res, null, "Projects retrieved successfully")
        } catch (error) {
            next(error)
        }
    }
}