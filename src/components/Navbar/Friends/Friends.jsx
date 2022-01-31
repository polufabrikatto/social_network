import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendsElements = props.names.map(n => (
        <Friend name={n.name}/>
    ))
	return (
		<div>
			<h1>Friends</h1>
			<div className={s.friends}>
                {friendsElements}
			</div>
		</div>
	);
};

export default Friends;
