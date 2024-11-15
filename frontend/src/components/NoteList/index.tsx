import type { Todo } from '@/types/models';

interface Props {
	data: Todo[];
}

export default function NoteList({ data }: Props) {
	return (
		<div className='flex flex-col divide-y divide-main w-full'>
			{data.map(item => (
				<div key={item.id} className='flex items-center gap-10 py-20'>
					<label className='flex items-center gap-15 cursor-pointer peer'>
						<input type='checkbox' className='' />

						<div className='text-lg capitalize font-medium peer-has-[:checked]:line-through'>
							{item.title}
						</div>
					</label>
				</div>
			))}
		</div>
	);
}
