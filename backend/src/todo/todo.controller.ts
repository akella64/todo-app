import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Query,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo, Prisma } from '@prisma/client';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('todos')
  async getTodos(
    @Query('title') title?: string,
    @Query('status') status?: string,
  ): Promise<Todo[]> {
    const filters: Prisma.TodoWhereInput = {};

    if (title) {
      filters.title = { contains: title };
    }

    if (status) {
      filters.status = { equals: status };
    }

    return this.todoService.todos(filters);
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
