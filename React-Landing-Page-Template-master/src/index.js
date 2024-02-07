import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import Login from './Login';
import { Navigation } from './components/navigation';
ReactDOM.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
    <Route path="/" element={<navigation/>}/>
      <Route path="UserRegistration" element={<UserRegistration/>}/>
      <Route path="Login" element={<Login/>}/>

    </Route>
  </Routes>
  
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();