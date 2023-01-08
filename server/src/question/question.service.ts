import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Question } from './question.model';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}

  async getPaginatedQuestions({
    offset,
    limit,
  }): Promise<{ questions: Question[]; total: number }> {
    const total = await this.questionModel.count();
    const questions = await this.questionModel.find().skip(offset).limit(limit);
    return { questions, total };
  }

  async addQuestion(question: Question): Promise<Question> {
    const newQuestion = new this.questionModel(question);
    await newQuestion.save();
    return newQuestion as Question;
  }
}
