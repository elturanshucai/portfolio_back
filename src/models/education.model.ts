import mongoose, { Schema, Document } from "mongoose";

export interface IEducation extends Document {
    name: string,
    speciality: string,
    type: string,
    description: string,
    startDate: Date,
    endDate: Date
}

const EducationSchema = new Schema<IEducation>({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        default: null
    }
})

export const Education = mongoose.model<IEducation>('Education', EducationSchema)