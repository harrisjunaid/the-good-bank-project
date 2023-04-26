import React, { useContext } from 'react'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// css
import './App.css';
// pages
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';
import AllDataPage from './pages/AllDataPage';
import NotFoundPage from './pages/NotFoundPage';
// context
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
                <Route path="/" element={<WelcomePage />} />
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
