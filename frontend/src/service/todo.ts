import { API } from '@/constants/api';

import type { Todo } from '@/types/models';
import type {
	CreateTodoByIdParams,
	UpdateTodoByIdParams,
	RemoveTodoByIdParams,
	GetTodosParams,
} from '@/types/requests';
import type { AxiosResponse } from 'axios';

export const getTodos = async ({ search }: GetTodosParams) => {
	const params = new URLSearchParams();

	if (search) {
		for (const k of Object.keys(search) as Array<keyof typeof search>) {
			const value = search[k];
			if (value !== undefined) {
				params.append(k, String(value));
			}
		}
	}

	const response: AxiosResponse<Todo[]> = await API.get(`/todos?${params}`);

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
