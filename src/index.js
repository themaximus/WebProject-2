import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State, { updateNewPostText, updateNewPostName, updateNewPostImageURL } from './Redux/STATE.js';

import {addPost, subscribe} from './Redux/STATE.js';


let renderEntireTree = () => {
 ReactDOM.render(
  <React.StrictMode>
    <App PostsEdit={State.PostsEdit} addPost={addPost} newPostText={State.newPostText} newPostName={State.newPostName} newPostImageURL={State.newPostImageURL} updateNewPostText={updateNewPostText} updateNewPostName={updateNewPostName}  PageList={State.PageList} updateNewPostImageURL={updateNewPostImageURL} />
    
  </React.StrictMode>,
  document.getElementById('root')
);
 }


 



 subscribe(renderEntireTree);

 renderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
