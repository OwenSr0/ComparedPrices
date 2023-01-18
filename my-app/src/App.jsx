import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/index';
import Login from './containers/Login/index'
import Register from './containers/Register/index'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
