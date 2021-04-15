import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import {addPost} from './state';
 import {updateNewPostText} from './state';



export let  rerenderEntireTree = (state) => {
ReactDOM.render(<App state={state} addPost={addPost}  updateNewPostText={updateNewPostText}/>,document.getElementById('root'));
}
