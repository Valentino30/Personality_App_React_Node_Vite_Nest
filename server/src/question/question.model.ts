import { Document, Schema } from 'mongoose';

export const QuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    answers: { type: [String], required: true },
  },
  // Use the options below to optimize data format for FE requests
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export interface Question extends Document {
  id: string;
  question: string;
  answers: string[];
}
