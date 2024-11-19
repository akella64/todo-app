import { useState } from 'react';

import { useUpdateTodoById } from '@/hooks/api/todo';

import EditButton from '@/components/EditButton';
import DeleteButton from '@/components/DeleteButton';

import type { TodoStatus } from '@/types/models';

interface Props {
	id: number;
	title: string;
	status: TodoStatus;
}

export default function NoteItem({ id, title, status }: Props) {
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [localTitle, setLocalTitle] = useState('');

	const mutation = useUpdateTodoById(id);

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

	/* 	const handleClickApplyTitle = () => {
		mutation.mutate({
			id,
			data: {
				title: localTitle,
				status,
			},
		});
	} */

	return (
		<div className='flex items-center gap-40 py-20'>
			<label className='flex items-center gap-15 cursor-pointer peer'>
				<input
					type='checkbox'
					className='peer size-20 cursor-pointer checked:bg-main appearance-none border border-main rounded-sm checked:before:content-["✔"] checked:before:text-white checked:before:block checked:before:text-center checked:before:w-full leading-tight'
					onChange={handleChangeStatus}
					checked={status === 'complete'}
				/>

				<div className='flex items-center gap-10'>
					<input
						type='text'
						className={`dark:text-white text-lg capitalize bg-inherit font-medium peer-[:checked]:line-through peer-[:checked]:opacity-50 border rounded-sm px-5 ${
							isOpenEdit
								? 'dark:border-white border-main'
								: ' pointer-events-none border-[#fff0]'
						}`}
						defaultValue={title}
						onChange={handleChangeTitle}
					/>
					{isOpenEdit ? (
						<div className='flex gap-5 items-center'>
							<button onClick={} type='button' className='bg-main text-white'>
								ok
							</button>
							<button type='button' className='bg-main text-white'>
								cancel
							</button>
						</div>
					) : null}
				</div>
			</label>

			<div className='ml-auto flex gap-10 items-center'>
				<EditButton isOpenEdit={isOpenEdit} setIsOpenEdit={setIsOpenEdit} />
				<DeleteButton todoId={id} />
			</div>
		</div>
	);
}
