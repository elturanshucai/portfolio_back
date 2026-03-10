import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category.model";
import { successResponse } from "../middleware/response.middleware";

export const CategoryController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body)
            const category = await Category.create(req.body)
            successResponse(res, category, "Category created successfully", 201)
        } catch (error) {
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            }
            successResponse(res, category, "Category updated successfully", 200)
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categories = await Category.find()
            successResponse(res, categories, "Categories retrieved successfully", 200)
        } catch (error) {
            next(error)
        }
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const category = await Category.findById(req.params.id)
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            }
            successResponse(res, category, "Category retrieved successfully", 200)
        } catch (error) {
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            }
            successResponse(res, null, "Category deleted successfully", 200)
        } catch (error) {
            next(error)
        }
    }
}