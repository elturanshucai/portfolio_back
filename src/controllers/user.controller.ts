import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { successResponse } from "../middleware/response.middleware";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET!

export const UserController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userCount = await User.countDocuments()
            if (userCount > 0) {
                throw Error('User can`t created')
            }
            const { username, password } = req.body;
            const hashedPassword = await bcryptjs.hash(password, 10)
            const newUser = await User.create({ username, password: hashedPassword })
            successResponse(res, newUser, 'User created successfully')
        } catch (error) {
            next(error)
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username })
            if (!user) throw Error('Wrong credentials')
            const passwordIsValid = bcryptjs.compareSync(password, user.password);
            if (!passwordIsValid) throw new Error('Wrong credentials');
            const token = jwt.sign({ id: user._id }, SECRET_KEY)
            const data = {
                username,
                token
            }
            successResponse(res, data)
        } catch (error) {
            next(error)
        }
    }
}