import { useImmer, useState, useEffect, useReducer } from 'react';
// context to create provider
import { BankContext } from './BankContext';
// db
import db from "../db/db.json"

// context provider
export const BankProvider = ({children}) => {
	const [loggedIn, setLoggedIn] = useState(false);  // login flag
	const [userIndex, setUserIndex] = useState(null); // 

	const [dbApp, setDBapp] = useState([...db]);  // db to memory for read/write
	const user = dbApp[userIndex]; // reference active user	
	
	useEffect(()=>{
		console.log(`dbApp is: 📁`);
		console.log(dbApp);
	},[dbApp]);

	return (
			<BankContext.Provider value={{loggedIn, setLoggedIn, setUserIndex, user, dbApp, setDBapp }}>
					{children}
			</BankContext.Provider>
	)
}