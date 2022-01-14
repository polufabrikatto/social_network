import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={s.content}>
			<img
				className={s.img}
				src="https://wallpaperaccess.com/full/25682.jpg"
				alt="pic"
			/>
			<div>ava + description</div>
			<MyPosts countPosts='2'/>
		</div>
	);
};

export default Profile;
