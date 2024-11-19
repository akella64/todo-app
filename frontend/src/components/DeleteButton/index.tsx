import DeleteIcon from '@/assets/trash-icon.svg?react';

import { useRemoveTodoById } from '@/hooks/api/todo';

interface Props {
	todoId: number;
	className?: string;
}

export default function DeleteButton({ className, todoId }: Props) {
	const mutate = useRemoveTodoById();

	const handleClick = () => {
		mutate.mutate(todoId);
	};

	return (
		<button
			type='button'
			className={`bg-none border-none outline-none peer hover:*:svg-stroke-red ${className}`}
			onClick={handleClick}>
			<DeleteIcon className='*:base-transition-colors size-[1.4625rem]' />
		</button>
	);
}
