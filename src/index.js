import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Authentication from './components/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/authentication' element={<Authentication/>} />

    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



// ReactDOM.render(
//   <BrowserRouter>
//     <Nav/>
//     <Routes>
//       <Route path='/' element={<App/>} />
//       <Route path='/authentication' element={<Authentication/>} />

//     </Routes>
//   </BrowserRouter>,document.getElementById('rooot')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
