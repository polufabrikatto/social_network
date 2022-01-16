import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Danon' },
		{ id: 2, name: 'Danisimo' },
		{ id: 3, name: 'Dan' },
		{ id: 4, name: 'Dobian' },
		{ id: 5, name: 'Dian' },
	];

	let dialogsElements = dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messages = [
		{ id: 1, message: 'Whats up' },
		{ id: 2, message: 'Hi' },
		{ id: 3, message: 'Hello' },
		{ id: 4, message: 'Dorouuuuu' },
		{ id: 5, message: 'YO' },
	];

	let messageElements = messages.map((m) => (
		<Message message={m.message} id={m.id} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				{messageElements}
				{/* <Message
					message={messagesData[0].message}
					id={messagesData[0].id}
				/>
				<Message
					message={messagesData[1].message}
					id={messagesData[1].id}
				/>
				<Message
					message={messagesData[2].message}
					id={messagesData[2].id}
				/>
				<Message
					message={messagesData[3].message}
					id={messagesData[3].id}
				/>
				<Message
					message={messagesData[4].message}
					id={messagesData[4].id}
				/> */}
			</div>
		</div>
	);
};

export default Dialogs;
