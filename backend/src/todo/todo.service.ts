import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todo(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }

  async todos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  // доделать

  /*   async updateTodo(params: {
    id: number;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { id, data } = params;
    return this.prisma.todo.update({
      data,
      where: {
        id,
      },
    });
  } */

  async deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
