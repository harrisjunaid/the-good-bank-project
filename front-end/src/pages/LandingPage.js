import React, { useContext, useState, useEffect, useCallback } from 'react'
// import { BankContext } from '../assets/context/BankContext';

import Login from '../components/LogIn'
import Register from '../components/Register'

function LandingPage() {
  const [display, setDisplay] = useState('login');

  const toggleDisplay = (to) => {
    setDisplay(to);
  }

  return (
    <div className="App">
      {
        display === "login" ? <Login changeOption = { toggleDisplay } /> : <Register changeOption = { toggleDisplay } />
      }
    </div>
  );
}

export default LandingPage;
