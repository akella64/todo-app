import PlusIcon from '@/assets/plus-icon.svg?react';

export default function CreateButton() {
	return (
		<button
			type='button'
			className='bg-main size-50 rounded-full fixed bottom-10 right-10 active:bg-darkMain active:base-shadow base-transition'>
			<PlusIcon className='m-auto' />
		</button>
	);
}
