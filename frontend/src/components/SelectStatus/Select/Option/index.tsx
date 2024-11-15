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
			className='cursor-pointer relative before:base-transition-opacity before:opacity-0 before:absolute before:inset-0 before:w-full before:bg-main hover:before:opacity-20 before:z-[1]'
			value={option.value}
			onClick={handleClick(option.value)}
			tabIndex={0}>
			<span className='relative z-[2] px-10 py-5 block'>{option.title}</span>
		</li>
	);
}
