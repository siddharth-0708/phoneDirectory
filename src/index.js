import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import PhoneDirectory from './PhoneDirectory';
import reportWebVitals from './reportWebVitals';
import store from './subscriberStore';

// With this we can use store anywhere in the application
ReactDOM.render(
    <Provider store = {store}><PhoneDirectory></PhoneDirectory></Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
