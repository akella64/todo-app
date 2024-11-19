import { useState } from 'react';

import Select from '@/components/ui/Select';

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
		title: 'Complete',
		value: 'complete',
	},
	{
		title: 'Incomplete',
		value: 'incomplete',
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
