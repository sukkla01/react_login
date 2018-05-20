import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

const token = localStorage.getItem('token')

if (token) {
    const decodeToken = jwtDecode(token)
   
   } else {
    //ถ้าไม่มี token ให้ redirect ไปยังหน้า signin
    console.log('token')
    //this.props.history.push('/')
   }


ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
