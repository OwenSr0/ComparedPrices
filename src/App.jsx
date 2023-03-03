import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';
import Login from './containers/Login/index'
import Register from './containers/Register/index';
import Search from './containers/Search';
import Comparo from './containers/Comparo/index'
import Logout from './containers/Logout/index';
import Test from './containers/Others/Test/index';
import './App.css';

function App() {

  return (
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/search/:query' element={<Search/>}></Route>
          <Route path='/comparo' element={<Comparo/>}></Route>
          <Route path='/sign-out' element={<Logout/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
