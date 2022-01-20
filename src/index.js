import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
	{ id: 1, message: ' Hi, who are you?', likecount: 12 },
	{ id: 2, message: " y'oyoyoy", likecount: 1 },
	{ id: 3, message: ' dada', likecount: 2 },
	{ id: 4, message: ' netnet', likecount: 3 },
];

let dialogs = [
	{ id: 1, name: 'Danon' },
	{ id: 2, name: 'Danisimo' },
	{ id: 3, name: 'Dan' },
	{ id: 4, name: 'Dobian' },
	{ id: 5, name: 'Dian' },
];

let messages = [
	{ id: 1, message: 'Whats up' },
	{ id: 2, message: 'Hi' },
	{ id: 3, message: 'Hello' },
	{ id: 4, message: 'Dorouuuuu' },
	{ id: 5, message: 'YO' },
];

ReactDOM.render(
	<App posts={posts} dialogs={dialogs} messages={messages} />,
	document.getElementById('root')
);
