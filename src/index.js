import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/ReduxStore';
  



let renderEntireTree = () => {
 ReactDOM.render(
  <React.StrictMode>
    <App  State={Store.getState()}  dispatch={Store.dispatch.bind(Store)}  />
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
