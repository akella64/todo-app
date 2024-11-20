import { Link } from 'react-router-dom';

import HomeIcon from '@/assets/home-icon.svg?react';

export default function About() {
	return (
		<section className='my-30'>
			<div className='max-w-[46.875rem] px-[1rem] relative mx-auto text-lg dark:text-white'>
				<h1 className='text-center font-semibold text-3xl'>
					About This Application
				</h1>

				<p className='mt-20'>
					Welcome to my To-Do List application, built as part of my portfolio to
					showcase my skills in full-stack development. This app is designed to
					help users manage their tasks effectively, and it has been developed
					using modern technologies to demonstrate my proficiency in both
					frontend and backend development.
				</p>

				<h2 className='font-medium text-xl mt-20 text-center'>
					Technologies Used
				</h2>

				<div className='font-medium pr-10 mt-20'>Frontend:</div>

				<ul className='mt-10 pl-30 list-disc space-y-5'>
					<li>
						<b>Vite:</b> For fast and efficient build and development processes.
					</li>
					<li>
						<b>React:</b> For building dynamic and interactive user interfaces.
					</li>
					<li>
						<b>TypeScript:</b> To ensure type safety and improve code
						maintainability.
					</li>
					<li>
						<b>Tanstack Query:</b> For managing server state, data fetching, and
						mutations.
					</li>
					<li>
						<b>React Router:</b> For smooth navigation between different pages
						and views.
					</li>
				</ul>

				<div className='font-medium pr-10 mt-30'>Backend:</div>

				<ul className='mt-10 pl-30 list-disc space-y-5'>
					<li>
						<b>NestJS:</b> A powerful framework built with TypeScript for
						building scalable and maintainable backend applications.
					</li>
					<li>
						<b>Prisma:</b> An ORM for managing database access and interacting
						with the PostgreSQL database.
					</li>
				</ul>

				<h2 className='font-medium text-xl mt-20 text-center'>
					What I Learned
				</h2>

				<p className='mt-20'>
					This project served as a great opportunity to deepen my knowledge of
					React and related tools. I focused on creating reusable UI components
					from scratch, without relying on third-party UI libraries, to enhance
					my component-building skills. I also worked with Tanstack Query for
					handling data fetching, caching, and mutations in a way that keeps the
					UI responsive and efficient.
				</p>

				<p className='mt-20'>
					On the backend side, I implemented several API endpoints using NestJS
					and Prisma to handle tasks, users, and their interactions with the
					to-do list. This allowed me to strengthen my skills in writing backend
					logic and creating efficient, type-safe APIs.
				</p>

				<p className='mt-20'>
					Overall, this project helped me develop a deeper understanding of
					modern full-stack development practices, combining React for frontend,
					NestJS for backend, and efficient data management with Prisma and
					Tanstack Query.
				</p>

				<p className='mt-20'>
					Feel free to explore the app and see how the tasks management works in
					real-time!
				</p>
			</div>

			<Link
				to='/'
				className='btn bg-main w-max h-40 text-white rounded-md px-10 mx-auto mt-30'>
				Go to home page
			</Link>

			<Link
				to='/'
				className='flex justify-center items-center bg-main size-50 rounded-full fixed bottom-20 right-10 active:bg-darkMain active:base-shadow base-transition'>
				<HomeIcon className='m-auto size-[1.5625rem]' />
			</Link>
		</section>
	);
}
