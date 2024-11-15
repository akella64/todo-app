import { useState } from 'react';

import Select from './Select';

import { TodoStatus } from '@/types/models';

type Option = {
	title: string;
	value: TodoStatus | 'all';
};

interface Props {
	className?: string;
}

const OPTIONS: Option[] = [
	{
		title: 'All',
		value: 'all',
	},
	{
		title: 'Is pending',
		value: 'pending',
	},
	{
		title: 'In progress',
		value: 'in_progress',
	},
	{
		title: 'Completed',
		value: 'completed',
	},
	{
		title: 'Is Canceled',
		value: 'canceled',
	},
];

export default function SelectStatus({ className }: Props) {
	const [status, setStatus] = useState('');

	const handleSelect = (value: string) => {
		setStatus(value);
	};

	const selectedStatus = OPTIONS.find(item => item.value === status);

	return (
		<Select
			className={className}
			placeholder='Select'
			onChange={handleSelect}
			selected={selectedStatus || OPTIONS[0]}
			options={OPTIONS}
		/>
	);
}
