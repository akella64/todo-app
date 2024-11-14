import { useEffect, useRef, useState } from 'react';

import Option from './Option';

import ArrowIcon from '@/assets/chevron-top.svg?react';

import type { MouseEventHandler } from 'react';
import type { Option as OptionType } from '@/types/common';

interface Props {
	className?: string;
	selected: OptionType | null;
	options: OptionType[];
	placeholder?: string;
	onChange?: (selected: OptionType['value']) => void;
	onClose?: () => void;
}

export default function Select({
	className,
	selected,
	options,
	placeholder,
	onChange,
	onClose,
}: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const rootRef = useRef<HTMLDivElement>(null);

	const handleOptionClick = (value: OptionType['value']) => {
		setIsOpen(false);
		onChange?.(value);
	};
	const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			if (target instanceof Node && !rootRef.current?.contains(target)) {
				if (isOpen && onClose) onClose();

				setIsOpen(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isOpen, onClose]);

	return (
		<div ref={rootRef} className={`relative ${className}`}>
			<div
				onClick={handlePlaceHolderClick}
				role='button'
				tabIndex={0}
				className='w-full bg-main flex justify-between items-center gap-2 p-10 h-40 cursor-pointer rounded-md base-shadow'>
				<div className='uppercase font-semibold text-white text-md mr-5'>
					{selected?.title || placeholder}
				</div>
				<ArrowIcon
					width={15}
					height={15}
					className={isOpen ? 'rotate-180' : ''}
				/>
			</div>

			{isOpen && (
				<ul className='w-full list-style-none mt-5 bg-white border-main border *:text-main *:font-semibold p-10 absolute top-4/4 w-full rounded-md'>
					{options.map(item => (
						<Option
							key={item.value}
							option={item}
							onClick={handleOptionClick}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
