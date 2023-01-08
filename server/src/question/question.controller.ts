import { Get, Controller, Post, Body, Req } from '@nestjs/common';

import { Question } from './question.model';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getPaginatedQuestions(@Req() { query }) {
    const questions = await this.questionService.getPaginatedQuestions(query);
    return questions;
  }

  @Post()
  async addQuestions(@Body('question') question: Question) {
    const newQuestion = await this.questionService.addQuestion(question);
    return newQuestion;
  }
}
