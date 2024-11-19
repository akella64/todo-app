import { useEffect, useState } from 'react';

import SpinSvg from '@/assets/spin.svg?react';
import ErrorSvg from '@/assets/error.svg?react';
import SuccessSvg from '@/assets/success.svg?react';

interface Props {
	children: React.ReactNode;
	isError: boolean;
	isPending: boolean;
	isSuccess: boolean;
	onCloseOverlay?: () => void;
}

export default function Overlay({
	children,
	isError,
	isPending,
	isSuccess,
	onCloseOverlay,
}: Props) {
	const [open, setOpen] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isPending && (isError || isSuccess)) {
			if (onCloseOverlay) onCloseOverlay();
			setOpen(true);

			if (timeoutId) clearTimeout(timeoutId);

			const newTimeoutId = setTimeout(() => setOpen(false), 5000);
			setTimeoutId(newTimeoutId);
		}
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
		/* eslint-disable react-hooks/exhaustive-deps */
	}, [isPending, onCloseOverlay]);

	return (
		<>
			{children}
			{open && (
				<div className='absolute inset-0 size-full backdrop-blur-lg flex justify-center items-center'>
					{isPending && (
						<SpinSvg className='has-[.anim]:animate-spin size-60 mx-auto' />
					)}

					{isError && (
						<div className='mx-auto text-center'>
							<ErrorSvg className='mx-auto size-60' />
							<div className='text-lg mt-10 text-center'>
								Error. Try again later
							</div>
						</div>
					)}

					{isSuccess && (
						<div className='mx-auto text-center'>
							<SuccessSvg className='mx-auto size-60' />
							<div className='text-lg mt-10 text-center'>
								The todo has been created
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
}
