import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { ApiError } from "../utils/ApiError"

const SECRET_KEY = process.env.JWT_SECRET!

export const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) return next(new ApiError(401, 'Unauthorized'))
        jwt.verify(token, SECRET_KEY, async (err) => {
            if (err) return next(new ApiError(401, 'Token is not valid'))
            return next()
        })
    } catch (error) {
        next(error)
    }
}