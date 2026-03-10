import mongoose, { Document } from "mongoose";

export interface ISkill extends Document {
    name: string;
    categoryId: mongoose.Types.ObjectId;
    icon?: string;
}

const SkillSchema = new mongoose.Schema<ISkill>({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    icon: {
        type: String,
        required: false
    }
})

export const Skill = mongoose.model<ISkill>("Skill", SkillSchema)