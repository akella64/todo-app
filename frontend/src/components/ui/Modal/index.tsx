import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: React.ReactNode;
	title?: React.ReactNode;
	open: boolean;
	width?: number;
	onClose: () => void;
}

export default function Modal({
	children,
	title,
	open,
	width,
	onClose,
}: Props) {
	const handleClickBackdropModal = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose();
	};

	const handleDialogClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		document.body.style.overflowY = open ? 'hidden' : '';
		//document.body.style.width = open ? 'calc(100% - 17px)' : '';

		return () => {
			document.body.style.overflowY = '';
			// document.body.style.width = '';
		};
	}, [open]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && open) {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [open, onClose]);

	return open
		? createPortal(
				<div>
					<div className='fixed inset-0 z-[1000] h-full bg-[rgba(0,0,0,0.45)] pointer-events-none'></div>
					<div
						className='fixed inset-0 z-[1000] overflow-auto outline-none'
						tabIndex={-1}
						onClick={handleClickBackdropModal}>
						<dialog
							className='relative mx-auto p-20 top-100 block rounded-lg bg-white dark:bg-black border border-white'
							style={{ width: `${width || 500}px` }}
							onClick={handleDialogClick}>
							{title}
							{children}
						</dialog>
					</div>
				</div>,
				document.body,
		  )
		: null;
}
