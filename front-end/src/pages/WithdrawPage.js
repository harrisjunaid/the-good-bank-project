import React, {useContext, useState} from "react"

import bankImg from "../assets/img/bank-main.jpg"
import { BankContext } from '../assets/context/BankContext';


const DepositPage = () => {
	const {user, dbApp, setDBapp, setLoggedIn}  = useContext(BankContext);
	const [amount, setAmount] =useState(null);
	console.log("user is:😁")
	console.log(user);
	console.log("selected amont:💲")
	console.log(amount);

	const transaction = () => {
		setDBapp(dbApp.map((x)=>{
			if(x.email === user.email) return({...x, balance: Number(x.balance) - Number(amount)});
			else {return x}
		}))
	}

	// console.log(transaction())

	// userBalance();
	/**
	 * //user balance() for customerData.json
	 * 	const userBalance = () => {
		// calculate total deposit
		let depositArray = user.transactions[0].deposit.map((a)=>{return a.amount});
		let totalDeposit = depositArray.reduce((total,amount)=>total+amount);
		// calculate total withdraw
		let withdrawArray = user.transactions[1].withdraw.map((a)=>{return a.amount});
		let totalWithdraw = withdrawArray.reduce((total,amount)=>total+amount);
		//calculate total balance
    let balance = totalDeposit + totalWithdraw;
		console.log(balance);
		return balance	
	}
	 */
	
	return(
		<div className="container mx-auto font-thin">
			<div className="card " >
			<img className="card-img"  style={{opacity: 0.85}}  src={bankImg} alt="Rex" />
			<div className="card-img-overlay text-white">
				<h1 className="card-title position-relative">GOOD BANK</h1>
				<button className="card-link btn btn-secondary mt-auto position-absolute top-0 end-0"  style={{  border: "2px solid white"}} onClick={()=>{setLoggedIn(false)}}>Logout</button>
				<div className="card-text lh-l">
					<div className="container  text-light mx-auto p-1  bg-secondary text-white font-thin">
						<h1>Hello {user.name} your balance is $ {user.balance} USD</h1>
						<div className="btn-group-vertical w-25" >
							<div className="input-group  mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text ">$</span>
								</div>
								<input type="number" id="amount" name="amount" min="0" max={user.balance}className="form-control" aria-label="Amount (to the nearest dollar)" onChange={e => setAmount(e.target.value)} />
								<div className="input-group-append">
									<span className="input-group-text">.00</span>
								</div>
							</div>
							<button className="card-link btn btn-secondary mt-auto"  style={{  border: "2px solid white"}} onClick={()=>{((amount<=	Number(user.balance)) && amount>0)?transaction():alert("INVALID INPUT")}}>Withdraw Amount</button>
						</div>
					</div>  
				</div>
			</div>
			</div>
		</div>
	)
};

export default DepositPage;
