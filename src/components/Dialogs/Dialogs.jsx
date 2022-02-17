import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import Avatar from './Avatar/Avatar';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message message={m.message} id={m.id} />
	));
	let avatarsElements = props.state.avatars.map((a) => (
		<Avatar avatar={a.avatar} id={a.id} />
    ));
    
    let newMessage = React.createRef();
    
    let addMessage= () =>{
        let text=newMessage.current.value;
        alert(text)
    }

	return (
		<div className={s.dialogs}>
			<div className={s.avatars}>{avatarsElements}</div>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				{messagesElements}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Add Message</button>
			</div>
		</div>
	);
};

export default Dialogs;
