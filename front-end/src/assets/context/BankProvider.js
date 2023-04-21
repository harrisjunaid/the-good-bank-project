import { useImmer, useState, useEffect, useReducer } from 'react';
import { BankContext } from './BankContext';
import db from "../db/db.json"

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