import { useQuery, useMutation } from '@tanstack/react-query';

import * as TodoService from '@/service/todo';

import type { Todo } from '@/types/models';

export const useGetTodos = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['todos'],
		queryFn: TodoService.getTodos,
	});

	return { data, isLoading, isError };
};

export const useGetTodoById = ({ id }: { id: number }) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['todos', id],
		queryFn: () => TodoService.getTodoById({ id }),
	});

	return { data, isLoading, isError };
};

export const useCreateTodoById = () => {
	return useMutation({
		mutationFn: (data: { data: Todo }) => TodoService.createTodoById(data),
	});
};

export const useRemoveTodoById = () => {
	return useMutation({
		mutationFn: (id: number) => TodoService.removeTodoById({ id }),
	});
};
