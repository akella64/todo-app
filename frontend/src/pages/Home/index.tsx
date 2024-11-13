import { useEffect } from 'react';
import { useGetTodos } from '../../hooks/api/todo';

export default function Home() {
	const { data, isLoading, isError } = useGetTodos();

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (isLoading) return 'Loading...';

	if (isError) return 'Error';

	/* 	return (
		<ul>
			{data?.map(item => (
				<li key={item.id}>{item.title}</li>
			))}
		</ul>
	); */
	return 123;
}
