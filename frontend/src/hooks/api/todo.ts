import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import * as TodoService from '@/service/todo';

import type { Todo } from '@/types/models';
import type {
	CreateTodoByIdParams,
	UpdateTodoByIdParams,
} from '@/types/requests';

export const useGetTodos = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['todos'],
		queryFn: TodoService.getTodos,
		staleTime: Infinity,
	});

	return { data, isLoading, isError };
};

export const useCreateTodoById = () => {
	return useMutation({
		mutationFn: (data: CreateTodoByIdParams) =>
			TodoService.createTodoById(data),
		retry: 1,
	});
};

export const useUpdateTodoById = (id: number) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateTodoByIdParams) =>
			TodoService.updateTodoById(data),
		onSuccess: data =>
			queryClient.setQueryData<Todo[]>(['todos'], oldData =>
				oldData?.map(item =>
					item.id === id ? { ...item, status: data.status } : item,
				),
			),
	});
};

export const useRemoveTodoById = () => {
	return useMutation({
		mutationFn: (id: number) => TodoService.removeTodoById({ id }),
	});
};
