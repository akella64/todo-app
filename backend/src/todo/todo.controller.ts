import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('todos')
  async getTodos(): Promise<Todo[]> {
    return this.todoService.todos();
  }

  @Post('todos')
  async createTodo(@Body() data: Omit<Todo, 'id'>): Promise<Todo> {
    const { title, status } = data;

    return this.todoService.createTodo({
      title,
      status,
    });
  }

  @Put('todos/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body() data: Omit<Todo, 'id'>,
  ): Promise<Todo> {
    return this.todoService.updateTodo({
      id: Number(id),
      data,
    });
  }

  @Delete('todos/:id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTodo(Number(id));
  }
}
