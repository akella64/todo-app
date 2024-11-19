import EmptySvg from '@/assets/empty.svg?react';

export default function EmptyData() {
	return (
		<div className='mt-100'>
			<EmptySvg className='mx-auto' />
			<div className='text-2xl font-medium mt-20 text-center dark:text-white'>
				Empty...
			</div>
		</div>
	);
}
