import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useUpdateTodoById } from '@/hooks/api/todo';

import EditButton from '@/components/EditButton';
import DeleteButton from '@/components/DeleteButton';

import type { TodoStatus, Todo } from '@/types/models';

import CloseIcon from '@/assets/close-icon.svg?react';
import ApplyIcon from '@/assets/check-icon.svg?react';

interface Props {
	id: number;
	title: string;
	status: TodoStatus;
}

export default function NoteItem({ id, title, status }: Props) {
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [localTitle, setLocalTitle] = useState(title);

	const queryClient = useQueryClient();

	const mutation = useUpdateTodoById();

	const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;

		const status = isChecked ? 'complete' : 'incomplete';

		mutation.mutate({
			id,
			data: {
				title,
				status,
			},
		});
	};

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const title = e.target.value;

		setLocalTitle(title);
	};

	const handleClickApplyTitle = () => {
		const queryCacheTodos = queryClient.getQueriesData<Todo[]>({
			queryKey: ['todos'],
		});

		const isChangedTodo = queryCacheTodos[0][1]?.some(
			item => item.title === localTitle,
		);

		if (!isChangedTodo) {
			mutation.mutate(
				{
					id,
					data: {
						title: localTitle,
						status,
					},
				},
				{
					onSuccess: () => setIsOpenEdit(false),
				},
			);
		} else {
			setIsOpenEdit(false);
		}
	};

	const handleCloseEditTitle = () => {
		setIsOpenEdit(prev => !prev);
		if (!mutation.isSuccess) setLocalTitle(title);
	};

	const isCompleteTodo = status === 'complete';

	return (
		<div className='flex items-center gap-40 py-20'>
			<div className='flex gap-10'>
				<label className='flex items-center gap-15 cursor-pointer'>
					<input
						type='checkbox'
						className='size-20 cursor-pointer checked:bg-main appearance-none border border-main rounded-sm checked:before:content-["✔"] checked:before:text-white checked:before:block checked:before:text-center checked:before:w-full leading-tight'
						onChange={handleChangeStatus}
						checked={isCompleteTodo}
					/>

					<input
						type='text'
						className={`${
							isCompleteTodo && !isOpenEdit ? 'line-through opacity-50' : ''
						} dark:text-white text-lg bg-inherit font-medium border rounded-sm px-5 ${
							isOpenEdit
								? 'dark:border-white border-main'
								: ' pointer-events-none border-[#fff0]'
						}`}
						value={localTitle}
						onChange={handleChangeTitle}
					/>
				</label>

				{isOpenEdit && (
					<div className='flex gap-10 items-center'>
						<button
							onClick={handleClickApplyTitle}
							type='button'
							className='bg-green rounded-full'>
							<ApplyIcon className='svg-stroke-white size-[1.5625rem] p-5' />
						</button>
						<button
							onClick={handleCloseEditTitle}
							type='button'
							className='bg-red rounded-full'>
							<CloseIcon className='svg-stroke-white size-[1.5625rem] p-5' />
						</button>
					</div>
				)}
			</div>

			<div className='ml-auto flex gap-10 items-center'>
				<EditButton
					isOpenEdit={isOpenEdit}
					handleCloseEditTitle={handleCloseEditTitle}
				/>
				<DeleteButton todoId={id} />
			</div>
		</div>
	);
}
