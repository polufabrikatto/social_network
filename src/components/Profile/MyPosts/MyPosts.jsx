import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div>
			My Posts ({props.countPosts})
			<div>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div className={s.posts}>
				<Post message="Hi, who are you?" likecount='12' />
				<Post message="y'oyoyoy" likecount='5' />
			</div>
		</div>
	);
};

export default MyPosts;
