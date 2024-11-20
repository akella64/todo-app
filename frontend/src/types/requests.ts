import type { Todo, TodoStatus } from './models';

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

export interface GetTodosParams {
	search?: {
		title?: string;
		status?: TodoStatus;
	};
}
