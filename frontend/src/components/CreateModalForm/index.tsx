import { useForm, SubmitHandler } from 'react-hook-form';

import { useCreateTodoById } from '@/hooks/api/todo';

import Modal from '@/components/ui/Modal';
//import Overlay from './Overlay';

import type { Todo } from '@/types/models';

type Inputs = {
	title: string;
};

type DataResultParams = {
	data: Omit<Todo, 'id'>;
};

interface Props {
	isOpenModal: boolean;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateModalForm({
	isOpenModal,
	setIsOpenModal,
}: Props) {
	const mutation = useCreateTodoById();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = data => {
		const dataResult: DataResultParams = {
			data: {
				...data,
				status: 'incomplete',
			},
		};

		mutation.mutate(dataResult);

		if (!mutation.isPending) {
			reset();
			setIsOpenModal(false);
		}
	};

	const handleClickCancelModal = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpenModal(false);
	};

	return (
		<Modal
			onClose={() => setIsOpenModal(false)}
			open={isOpenModal}
			title={
				<div className='text-center font-medium text-xl dark:text-white uppercase'>
					New note
				</div>
			}>
			{/* 			<Overlay
				isError={mutation.isError}
				isPending={mutation.isPending}
				isSuccess={mutation.isSuccess}
				onCloseOverlay={() => reset}> */}
			<form className='mt-30' onSubmit={handleSubmit(onSubmit)}>
				<label>
					<input
						type='text'
						placeholder='Input your note...'
						className={`bg-white border rounded-md w-full h-40 px-15 outline-none font-light dark:bg-black dark:text-white ${
							errors.title ? 'border-red' : 'border-main'
						}`}
						{...register('title', { required: true })}
					/>
					{errors.title && (
						<span className='text-sm text-red'>This field is required</span>
					)}
				</label>

				<div className='flex justify-between items-center mt-100'>
					<button
						type='button'
						onClick={handleClickCancelModal}
						className='w-max h-40 px-15 border border-main py-5 bg-white text-main uppercase font-medium dark:bg-black'>
						Cancel
					</button>
					<button
						type='submit'
						className='w-max h-40 px-15 py-5 bg-main text-white uppercase font-medium'>
						Apply
					</button>
				</div>
			</form>
			{/* 		</Overlay> */}
		</Modal>
	);
}
