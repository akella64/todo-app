import { useEffect, useState } from 'react';

import MoonIcon from '@/assets/moon-icon.svg?react';
import SunIcon from '@/assets/sun-icon.svg?react';

interface Props {
	className?: string;
}

export default function ButtonTheme({ className }: Props) {
	const [isDarkTheme, setIsDarkTheme] = useState(
		() => !!localStorage.getItem('theme'),
	);

	const handleClick = () => {
		setIsDarkTheme(prev => {
			const newTheme = !prev;
			if (newTheme) {
				localStorage.setItem('theme', 'dark');
				document.documentElement.classList.add('dark');
			} else {
				localStorage.removeItem('theme');
				document.documentElement.classList.remove('dark');
			}
			return newTheme;
		});
	};

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkTheme]);

	return (
		<button
			type='button'
			onClick={handleClick}
			className={`bg-main rounded-md p-5 h-40 active:bg-darkMain active:base-shadow base-transition ${className}`}>
			{isDarkTheme ? (
				<SunIcon className='m-auto' />
			) : (
				<MoonIcon className='m-auto' />
			)}
		</button>
	);
}
