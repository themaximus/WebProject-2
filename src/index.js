import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/STATE.js';




let renderEntireTree = () => {
 ReactDOM.render(
  <React.StrictMode>
    <App  State={Store.getState()} PostsEdit={Store._State.PostsEdit} dispatch={Store.dispatch.bind(Store)} newPostText={Store._State.newPostText} newPostName={Store._State.newPostName} newPostImageURL={Store._State.newPostImageURL}    PageList={Store._State.PageList}  />
    
  </React.StrictMode>,
  document.getElementById('root')
);
 }


 



 Store.subscribe(renderEntireTree);

 renderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
