import React from 'react';
import s from './../Dialogs.module.css';

const Avatar = (props) => {
	return <div className={s.avatar}>{props.avatar}</div>;
};

export default Avatar;
