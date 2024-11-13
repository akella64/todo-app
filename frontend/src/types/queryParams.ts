import type { TodoStatus } from './models';

export interface СreateTodoById {
	data: {
		title: string;
		description: string;
		status: TodoStatus;
	};
}

export interface GetTodoById {
	id: number;
}
