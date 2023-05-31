'use client';
import Notes from './components/notes';

export default function Home() {
	const notes = [
		{
			id: 1,
			desc: 'css is nice',
			important: true,
		},
		{
			id: 2,
			desc: 'js is nice',
			important: true,
		},
		{
			id: 3,
			desc: 'react is nice',
			important: true,
		},
	];
	return (
		<div>
			<Notes notes={notes} />
		</div>
	);
}
