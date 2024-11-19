import { API } from '@/constants/api';

import type { Todo } from '@/types/models';
import type {
	CreateTodoByIdParams,
	UpdateTodoByIdParams,
	RemoveTodoByIdParams,
} from '@/types/requests';
import type { AxiosResponse } from 'axios';

export const getTodos = async () => {
	const response: AxiosResponse<Todo[]> = await API.get('/todos');

	return response.data;
};

export const createTodoById = async ({ data }: CreateTodoByIdParams) => {
	const response: AxiosResponse<Todo> = await API.post('/todos', data);

	return response.data;
};

export const updateTodoById = async ({ id, data }: UpdateTodoByIdParams) => {
	const response: AxiosResponse<Todo> = await API.put(`/todos/${id}`, data);

	return response.data;
};

export const removeTodoById = async ({ id }: RemoveTodoByIdParams) => {
	const response: AxiosResponse<Todo> = await API.delete(`/todos/${id}`);

	return response.data;
};
