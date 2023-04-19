import React, {useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';
import Login from './containers/Login/index';
import Register from './containers/Register/index';
import Search from './containers/Search';
import Product from './containers/Product/index';
import About from './containers/About/index';
import Info from './containers/Info/index';
import Contact from './containers/Contact/index';
import Blog from './containers/Blog/index';
import BlogAdd from './containers/Blog/Add';
import Test from './containers/Others/Test/index';
import ReHome from './containers/Others/ReHome';
import './App.css';

function App() {

  const [region, setRegion] = useState('')

  const routes = [
    {
      path: '',
      element: <Home region={region}/>
    },  
    {
      path: 'home',
      element: <Home region={region}/>
    },
    {
      path: 'login',
      element: <Login region={region}/>
    },
    {
      path: 'register',
      element: <Register region={region}/>
    },
    {
      path: 'search',
      element: <Search region={region}/>
    },
    {
      path: 'product',
      element: <Product region={region}/>
    },
    {
      path: 'about',
      element: <About region={region}/>
    },
    {
      path: 'info',
      element: <Info region={region}/>
    },
    {
      path: 'contact',
      element: <Contact region={region}/>
    },
    {
      path: 'blog',
      element: <Blog region={region}/>,
      children: [
        {
          path: 'add',
          element: <BlogAdd region={region}/>
        }
      ]
    },
    {
      path: 'test',
      element: <Test region={region}/>
    }
  ];

  const mx_es = [
    {
      path: '/mx-es',
      children: routes
    }
  ]
  if(!region){
    setRegion('mx-es')
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReHome region={region}/>}></Route>
        {mx_es.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children && children.map(({ path, element, children }) => (
              <Route key={path} path={path} element={element} >
                {children && children.map(({ path, element, children }) => (
                  <Route key={path} path={path} element={element} />
              ))}
              </Route>
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

