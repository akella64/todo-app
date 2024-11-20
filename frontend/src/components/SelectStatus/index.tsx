import Select from '@/components/ui/Select';

import { TodoStatus } from '@/types/models';

type ValueSelectStatus = TodoStatus | 'all';

type Option = {
	title: string;
	value: string;
};

interface Props {
	className?: string;
	statusFilter: ValueSelectStatus;
	setStatusFilter: React.Dispatch<React.SetStateAction<ValueSelectStatus>>;
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

export default function SelectStatus({
	className,
	setStatusFilter,
	statusFilter,
}: Props) {
	const handleSelect = (value: string) => {
		setStatusFilter(value as ValueSelectStatus);
	};

	const selectedStatus = OPTIONS.find(item => item.value === statusFilter);

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
