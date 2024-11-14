import type { MouseEventHandler } from 'react';
import type { Option } from '@/types/common';

interface Props {
	option: Option;
	onClick: (value: Option['value']) => void;
}

export default function Option({ option, onClick }: Props) {
	const handleClick =
		(val: Option['value']): MouseEventHandler<HTMLLIElement> =>
		() =>
			onClick(val);

	return (
		<li
			className='cursor-pointer'
			value={option.value}
			onClick={handleClick(option.value)}
			tabIndex={0}>
			{option.title}
		</li>
	);
}
