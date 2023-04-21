import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS
import './index.css';
// Components
import App from './App';
//  Web Vitals
import reportWebVitals from './reportWebVitals';
// Context
import { BankProvider } from './assets/context/BankProvider';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// NavBar Tooltip
import './components/tooltip'
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BankProvider>
       <App />
    </BankProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
