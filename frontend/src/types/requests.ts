import type { Todo } from './models';

export type TodoData = {
	data: Omit<Todo, 'id'>;
};

export type CreateTodoByIdParams = TodoData;

export interface UpdateTodoByIdParams extends TodoData {
	id: number;
}

export interface RemoveTodoByIdParams {
	id: number;
}
