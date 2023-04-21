import './App.css';
import React, {useContext, useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';
import AllDataPage from './pages/AllDataPage';
import NotFoundPage from './pages/NotFoundPage';

import { BankContext } from './assets/context/BankContext';


function App() {
  const { loggedIn } = useContext(BankContext);
  
  return ( 
    <>
      {
        !(loggedIn) ? <LandingPage /> : 
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <div id="page-body">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateAccountPage />} />
                <Route path="/deposit" element={<DepositPage />} />
                <Route path="/withdraw" element={<WithdrawPage />} />
                <Route path="/all" element={<AllDataPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      }    
    </>
  );
}

export default App;
