import mongoose, { Schema, Document, Types } from "mongoose";

export interface IExperience extends Document {
    name: string,
    period: string,
    role: string,
    skills: Types.ObjectId[]
}

const ExperienceSchema = new Schema<IExperience>({
    name: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: "Skill"
        }
    ]
})

export const Experience = mongoose.model<IExperience>('Experience', ExperienceSchema)