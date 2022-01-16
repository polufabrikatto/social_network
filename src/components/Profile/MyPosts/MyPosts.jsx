import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let posts = [
		{ id: 1, message: ' Hi, who are you?', likecount: 12 },
        { id: 2, message: " y'oyoyoy", likecount: 1 },
        { id: 3, message: " dada", likecount: 2 },
        { id: 4, message: " netnet", likecount: 3 },
	];

	let postsElements = posts.map((p) => (
		<Post message={p.message} likecount={p.likecount} />
	));

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
				{postsElements}
				{/* <Post message={postsData[0].message} likecount={postsData[0].likecount} />
				<Post message={postsData[1].message} likecount={postsData[1].likecount} /> */}
			</div>
		</div>
	);
};

export default MyPosts;
