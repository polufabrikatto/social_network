import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div className={s.postsBlock}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message=" Hi, who are you?" likecount="12" />
				<Post message=" y'oyoyoy" likecount="5" />
			</div>
		</div>
	);
};

export default MyPosts;
