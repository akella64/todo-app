import EditIcon from '@/assets/pen-icon.svg?react';

interface Props {
	className?: string;
	isOpenEdit: boolean;
	setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditButton({
	className,
	isOpenEdit,
	setIsOpenEdit,
}: Props) {
	const handleToggleButton = () => {
		setIsOpenEdit(prev => !prev);
	};

	return (
		<button
			type='button'
			className={`bg-none border-none outline-none peer ${
				isOpenEdit ? '*:svg-stroke-main' : ''
			} hover:*:svg-stroke-main ${className}`}
			onClick={handleToggleButton}>
			<EditIcon className='*:base-transition-colors size-[1.4625rem]' />
		</button>
	);
}
