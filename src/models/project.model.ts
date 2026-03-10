import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    name: string;
    description?: string;
    experience: mongoose.Types.ObjectId;
    skills: mongoose.Types.ObjectId[];
    link?: string;
    images?: string[];
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
        required: true
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
    }
});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);