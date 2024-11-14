import { API } from '@/constants/api';

import type { Todo } from '@/types/models';
import type { AxiosResponse } from 'axios';

export const getTodos = async () => {
	const response: AxiosResponse<Todo[]> = await API.get('/todos');

	return response.data;
};

export const getTodoById = async ({ id }: { id: number }) => {
	const response: AxiosResponse<Todo> = await API.get(`/todos/${id}`);

	return response.data;
};

export const createTodoById = async ({ data }: { data: Todo }) => {
	const response: AxiosResponse<Todo> = await API.post('/todos', data);

	return response.data;
};

export const removeTodoById = async ({ id }: { id: number }) => {
	const response: AxiosResponse<Todo> = await API.delete(`/todos/${id}`);

	return response.data;
};
