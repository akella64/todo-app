import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('todos/:id')
  async getTodoById(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.todo(Number(id));
  }

  @Get('todos')
  async getTodos(): Promise<Todo[]> {
    return this.todoService.todos();
  }

  @Post('todos')
  async createTodo(
    @Body() data: { title: string; description: string; status: string },
  ): Promise<Todo> {
    const { title, description, status } = data;

    return this.todoService.createTodo({
      title,
      description,
      date_create: new Date(),
      status,
    });
  }

  @Delete('todos/:id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTodo(Number(id));
  }
}
