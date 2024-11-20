import { useState } from 'react';

import { useGetTodos } from '@/hooks/api/todo';
import useDebounce from '@/hooks/useDebounce';

import SearchInput from '@/components/SearchInput';
import SelectStatus from '@/components/SelectStatus';
import ButtonTheme from '@/components/ButtonTheme';
import CreateButton from '@/components/CreateButton';
import NoteList from '@/components/NoteList';
import AboutLinkButton from '@/components/AboutLinkButton';

import EmptyData from '@/components/ui/EmptyData';
import Error from '@/components/ui/Error';
import Spinner from '@/components/ui/Spinner';

import type { TodoStatus } from '@/types/models';

type ValueSelectStatus = TodoStatus | 'all';

export default function Home() {
	const [statusFilter, setStatusFilter] = useState<ValueSelectStatus>('all');
	const [titleFilter, setTitleFitler] = useState('');

	const debouncedTitleFilter = useDebounce(titleFilter, 550);

	const { data, isLoading, isError } = useGetTodos({
		search: {
			title: debouncedTitleFilter !== '' ? debouncedTitleFilter : undefined,
			status: statusFilter !== 'all' ? statusFilter : undefined,
		},
	});

	const isDataEmpty = data && data?.length > 0;

	return (
		<section className='mt-10'>
			<div className='max-w-[46.875rem] px-[1rem] relative mx-auto'>
				<h1 className='uppercase font-semibold text-2xl text-center dark:text-white text-main'>
					To do list
				</h1>

				<div className='flex items-center gap-4 justify-center my-30'>
					<SearchInput
						titleFilter={titleFilter}
						setTitleFitler={setTitleFitler}
					/>
					<SelectStatus
						statusFilter={statusFilter}
						setStatusFilter={setStatusFilter}
						className='w-2/12'
					/>
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

				<AboutLinkButton />
				<CreateButton />
			</div>
		</section>
	);
}
