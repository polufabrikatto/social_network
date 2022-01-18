import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Danon' },
		{ id: 2, name: 'Danisimo' },
		{ id: 3, name: 'Dan' },
		{ id: 4, name: 'Dobian' },
		{ id: 5, name: 'Dian' },
	];

	let dialogsElements = dialogs.map((d) => (<DialogItem name={d.name} id={d.id} />));

	let messages = [
		{ id: 1, message: 'Whats up' },
		{ id: 2, message: 'Hi' },
		{ id: 3, message: 'Hello' },
		{ id: 4, message: 'Dorouuuuu' },
		{ id: 5, message: 'YO' },
	];

	let messageElements = messages.map((m) => (<Message message={m.message} id={m.id} />));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messageElements}</div>
		</div>
	);
};

export default Dialogs;
