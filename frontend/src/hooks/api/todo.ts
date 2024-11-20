import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import * as TodoService from '@/service/todo';

import type {
	CreateTodoByIdParams,
	UpdateTodoByIdParams,
	GetTodosParams,
} from '@/types/requests';

export const useGetTodos = ({ search }: GetTodosParams) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['todos', { ...search }],
		queryFn: () => TodoService.getTodos({ search }),
	});

	return { data, isLoading, isError };
};

export const useCreateTodoById = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateTodoByIdParams) =>
			TodoService.createTodoById(data),
		retry: 1,
		onSuccess: () => queryClient.refetchQueries(),
	});
};

export const useUpdateTodoById = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateTodoByIdParams) =>
			TodoService.updateTodoById(data),
		onSuccess: () => queryClient.refetchQueries(),
	});
};

export const useRemoveTodoById = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: number) => TodoService.removeTodoById({ id }),
		onSuccess: () => queryClient.refetchQueries(),
	});
};
