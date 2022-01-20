import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import {dialogs} from './../../index';
// import {messages} from './../../index';

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messageElements = props.messages.map((m) => (
		<Message message={m.message} id={m.id} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messageElements}</div>
		</div>
	);
};

export default Dialogs;
