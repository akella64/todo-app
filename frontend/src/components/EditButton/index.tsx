import EditIcon from '@/assets/pen-icon.svg?react';

interface Props {
	className?: string;
	isOpenEdit: boolean;
	handleCloseEditTitle: () => void;
}

export default function EditButton({
	className,
	isOpenEdit,
	handleCloseEditTitle,
}: Props) {
	return (
		<button
			type='button'
			className={`bg-none border-none outline-none peer ${
				isOpenEdit ? '*:svg-stroke-main' : ''
			} hover:*:svg-stroke-main ${className}`}
			onClick={handleCloseEditTitle}>
			<EditIcon className='*:base-transition-colors size-[1.4625rem]' />
		</button>
	);
}
