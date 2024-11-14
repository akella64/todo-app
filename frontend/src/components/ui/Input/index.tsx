import SearchIcon from '@/assets/search-icon.svg?react';

interface Props {
	className?: string;
}

export default function Input({ className }: Props) {
	return (
		<div className={`relative w-[31.25rem] h-40 ${className}`}>
			<input
				type='text'
				placeholder='Search note...'
				className='dark:border-white dark:placeholder:text-white dark:text-white dark:bg-black size-full py-5 px-15 border font-medium rounded-md border-main placeholder:text-main placeholder:text-opacity-60 text-main focus:outline-none focus:ring-2 focus:ring-main-40 ring-0 dark:focus:ring-white-40'
			/>
			<SearchIcon className='absolute inset-y-2/4 right-10 my-auto cursor-pointer z-10 dark:svg-fill-white' />
		</div>
	);
}
