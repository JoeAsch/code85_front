import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './table.css';
//import MyApp from './components/Table';
//import Navbar from './components/Navbar';
//import { BrowserRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
import Browser from './pages/Navbartoo';
//import Reports from './pages/Reports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Browser />
    
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
