import { useState } from 'react';

import MoonIcon from '@/assets/moon-icon.svg?react';
import SunIcon from '@/assets/sun-icon.svg?react';

export default function ButtonTheme() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const handleClick = () => {
		setIsDarkTheme(prev => !prev);
	};

	return (
		<button
			type='button'
			onClick={handleClick}
			className='bg-main rounded-md p-5 size-40 base-shadow'>
			{!isDarkTheme ? (
				<SunIcon className='m-auto' />
			) : (
				<MoonIcon className='m-auto' />
			)}
		</button>
	);
}
