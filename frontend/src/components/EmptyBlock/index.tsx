import EmptySvg from '@/assets/empty.svg?react';

export default function EmptyBlock() {
	return (
		<>
			<EmptySvg className='mx-auto' />
			<div className='text-lg font-semibold mt-20'>Empty...</div>
		</>
	);
}
