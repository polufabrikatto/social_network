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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Dialog 1" id="1" />
				<DialogItem name="Dialog 2" id="2" />
				<DialogItem name="Dialog 3" id="3" />
				<DialogItem name="Dialog 4" id="4" />
				<DialogItem name="Dialog 5" id="5" />
			</div>
			<div className={s.messages}>
				<Message message="Whats up" />
				<Message message="Hi" />
				<Message message="Hello" />
				<Message message="YO" />
			</div>
		</div>
	);
};

export default Dialogs;
