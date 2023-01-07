import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { Question } from './question.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}

  async getQuestions(): Promise<Question[]> {
    const questions = await this.questionModel.find();
    return questions as Question[];
  }

  async addQuestion(question: Question): Promise<Question> {
    const newQuestion = new this.questionModel(question);
    await newQuestion.save();
    return newQuestion as Question;
  }
}
