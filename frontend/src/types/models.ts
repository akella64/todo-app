export type TodoStatus = 'complete' | 'incomplete';

export interface Todo {
	id: number;
	title: string;
	status: TodoStatus;
}
