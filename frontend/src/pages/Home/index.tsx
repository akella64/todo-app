//import { useGetTodos } from '@/hooks/api/todo';

import Input from '@/components/ui/Input';
import SelectStatus from '@/components/SelectStatus';
import ButtonTheme from '@/components/ui/ButtonTheme';

export default function Home() {
	/* 	const { data, isLoading, isError } = useGetTodos();

	if (isLoading) return 'Loading...';

	if (isError) return 'Error'; */

	return (
		<section className='mt-10'>
			<div className='container'>
				<h1 className='uppercase font-semibold text-2xl text-center dark:text-white'>
					Todo list
				</h1>

				<div className='flex items-center gap-4 justify-center mt-30'>
					<Input />
					<SelectStatus />
					<ButtonTheme />
				</div>
			</div>
		</section>
	);
}
