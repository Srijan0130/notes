import { useState } from 'react';
export default function Notes(props) {
	// const {notes} = props
	const [notes, setNotes] = useState(props.notes);
	const [desc, setDesc] = useState('');
	const [showAll, setShowAll] = useState(true);
	const [isEdit, setIsEdit] = useState(false);

	const notesToShow = showAll ? notes : notes.filter((note) => note.important);

	const handleChange = (event) => setDesc(event.target.value);
	const handleAdd = (event) => {
		event.preventDefault();
		const newNote = {
			id: notes.length + 1,
			desc: desc,
			important: Math.random() < 0.5,
		};
		setNotes(notes.concat(newNote));
		setDesc('');
	};
	const handleDelete = (noteId) => {
		if (window.confirm(` you sure you want to delete note ${noteId}?`))
			setNotes(notes.filter((note) => note.id !== noteId));
	};
	const handleEdit = (noteId) => {
		setDesc(notes.find((note) => note.id === noteId).desc);
		setIsEdit(true);
	};
	const handleSave = (event) => {
		event.preventDefault();
	};
	return (
		<div>
			<h2> Notes </h2>
			<button onClick={() => setShowAll(!showAll)}>
				show{showAll ? 'important' : 'all'}
			</button>
			<ul>
				{notesToShow.map((note) => (
					<li key={note.id}>
						{note.desc}
						{''}
						<button onClick={() => handleDelete(note.id)}>delete</button>
						<button onClick={() => handleEdit(note.id)}>edit</button>
					</li>
				))}
			</ul>
			<br />
			<form>
				<input type="text" value={desc} onChange={handleChange} />{' '}
				{isEdit ? (
					<button>Save</button>
				) : (
					<button onClick={handleAdd}>Add</button>
				)}
			</form>
		</div>
	);
}
