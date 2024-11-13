export type TodoStatus = 'pending' | 'in_progress' | 'completed' | 'canceled';

export interface Todo {
	id: number;
	title: string;
	description: string;
	date_create: Date;
	status: TodoStatus;
}
