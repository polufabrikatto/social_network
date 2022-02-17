import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './redux/state'
//addPost('JS');

export let rerenderEntireTree = (state) =>{
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, 
    document.getElementById('root'));
};

