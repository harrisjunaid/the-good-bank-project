import React, { useContext, useState, useEffect, useCallback } from 'react'
import { BankContext } from '../assets/context/BankContext';
import InputForm from "../components/InputForm"

const CreateAccountPage = () => {
    const {dbApp, setDBapp} = useContext(BankContext);
    let [customerList, setCustomerList] = useState([...dbApp]);

    useEffect(()=>{
      console.log('updated customer list:')
      console.log(customerList)
      console.log(typeof customerList)
    },[customerList])


    return(
        <InputForm onRegisterCustomer={newCustomer => setDBapp([...dbApp, newCustomer])}
        />
    );
}

export default CreateAccountPage;
