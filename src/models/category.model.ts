import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
    name: string,
    color: string,
}

const CategorySchema: Schema = new Schema<ICategory>({
    name: { type: String, required: true },
    color: {type: String, default: '#00FFB2'}
});

export const Category = mongoose.model<ICategory>("Category", CategorySchema);