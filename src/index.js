import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/main.css';

import Home from './components/Home';
import About from './components/About';
import Data from './components/utils/data/Projects';
import Projects from './components/Projects';
import ProjectView from './components/ProjectView';
import Services from './components/Services';
import Inquire from './components/Inquire';
import ImageView from './components/ImageView';

import { BrowserRouter, Routes, Route, Link, Outlet, useRoutes, useParams } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} exact>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects data={Data} />} exact />
        <Route path='/project/:id' element={<ProjectView data={Data} />} exact />
        <Route path='/project/:id/:id' element={<ImageView data={Data} />} exact />

        <Route path='/services' element={<Services />} />
        <Route path='/inquire' element={<Inquire />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
