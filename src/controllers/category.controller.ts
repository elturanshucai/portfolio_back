import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category.model";
import { successResponse } from "../middleware/response.middleware";

export const CategoryController = {
    create: async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const category = await Category.create(req.body)
            successResponse(res, category, "Category created successfully", 201)
        } catch (error) {
            next(error)
        }
    }
}