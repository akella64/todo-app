import { useGetTodos } from '@/hooks/api/todo';

import Input from '@/components/ui/Input';
import SelectStatus from '@/components/SelectStatus';
import ButtonTheme from '@/components/ButtonTheme';
import CreateButton from '@/components/CreateButton';
import NoteList from '@/components/NoteList';

import EmptyData from '@/components/ui/EmptyData';
import Error from '@/components/ui/Error';
import Spinner from '@/components/ui/Spinner';

export default function Home() {
	const { data, isLoading, isError } = useGetTodos();

	const isDataEmpty = data && data?.length > 0;

	return (
		<section className='mt-10'>
			<div className='max-w-[46.875rem] px-[1rem] relative mx-auto'>
				<h1 className='uppercase font-semibold text-2xl text-center dark:text-white'>
					Todo list
				</h1>

				<div className='flex items-center gap-4 justify-center my-30'>
					<Input className='w-9/12' />
					<SelectStatus className='w-2/12' />
					<ButtonTheme className='w-1/12' />
				</div>

				{!isError ? (
					!isLoading ? (
						isDataEmpty ? (
							<NoteList data={data} />
						) : (
							<EmptyData />
						)
					) : (
						<Spinner />
					)
				) : (
					<Error />
				)}

				<CreateButton />
			</div>
		</section>
	);
}
