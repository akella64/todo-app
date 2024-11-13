import * as TodoService from '../../service/todo';
import { useQuery } from '@tanstack/react-query';

export const useGetTodos = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['todos'],
		queryFn: TodoService.getTodos,
	});

	return { data, isLoading, isError };
};
