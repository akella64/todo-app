import { Link } from 'react-router-dom';

export default function AboutLinkButton() {
	return (
		<Link
			to='/about'
			className='flex justify-center items-center text-center bg-main size-50 rounded-full fixed bottom-80 right-10 active:bg-darkMain active:base-shadow base-transition'>
			<span className='font-medium text-3xl text-white'>?</span>
		</Link>
	);
}
