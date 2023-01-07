import { Get, Controller, Post, Body } from '@nestjs/common';
import { Question } from './question.model';

import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions() {
    const questions = await this.questionService.getQuestions();
    return questions;
  }

  @Post()
  async addQuestions(@Body('question') question: Question) {
    const newQuestion = await this.questionService.addQuestion(question);
    return newQuestion;
  }
}
