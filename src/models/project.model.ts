import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    name: string;
    description?: string;
    experience: mongoose.Types.ObjectId;
    skills: mongoose.Types.ObjectId[];
    link?: string;
    images?: string[];
    color: string
}

const ProjectSchema = new Schema<IProject>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    experience: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience",
        default: null
    },
    skills: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Skill",
        default: []
    },
    link: {
        type: String,
        default: null
    },
    images: {
        type: [String],
        default: null
    },
    color: {
        type: String,
        default: '#00FFB2'
    }
});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);