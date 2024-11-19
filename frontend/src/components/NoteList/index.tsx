import NoteItem from './NoteItem';

import type { Todo } from '@/types/models';

interface Props {
	data: Todo[];
}

export default function NoteList({ data }: Props) {
	return (
		<div className='flex flex-col divide-y divide-main w-full'>
			{data.map(item => (
				<NoteItem
					status={item.status}
					key={item.id}
					id={item.id}
					title={item.title}
				/>
			))}
		</div>
	);
}
