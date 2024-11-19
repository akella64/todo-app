import ErrorSvg from '@/assets/error.svg?react';

export default function Error() {
	return (
		<div className='mt-100'>
			<ErrorSvg className='mx-auto' />
			<div className='text-2xl font-medium mt-10 text-center dark:text-white'>
				Error...
			</div>
		</div>
	);
}
