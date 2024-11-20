import SearchIcon from '@/assets/search-icon.svg?react';

interface Props {
	titleFilter: string;
	setTitleFitler: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ setTitleFitler, titleFilter }: Props) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTitleFitler(value);
	};

	return (
		<div className='relative h-40 w-9/12'>
			<input
				onChange={handleChange}
				value={titleFilter}
				type='text'
				placeholder='Search note...'
				className='dark:border-white dark:placeholder:text-white dark:text-white dark:bg-black size-full py-5 px-15 border font-medium rounded-md border-main placeholder:text-main placeholder:text-opacity-60 text-main focus:outline-none focus:ring-2 focus:ring-main-40 ring-0 dark:focus:ring-white-40 base-transition'
			/>
			<SearchIcon className='absolute inset-y-2/4 right-10 my-auto cursor-pointer z-10 dark:svg-fill-white' />
		</div>
	);
}
