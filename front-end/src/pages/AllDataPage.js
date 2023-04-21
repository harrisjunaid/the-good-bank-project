import React, {useContext} from 'react'
import bankImg from "../assets/img/bank-main.jpg"
import { BankContext } from '../assets/context/BankContext';

const TableRow = ({user}) => {
	return(
		<tr className="fs-5">
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.password}</td>
			<td>$ {user.balance}</td>
		</tr>
	)
}

const AllDataPage = () => {
	const {dbApp, setLoggedIn} = useContext(BankContext);
	console.log(dbApp);

	return(
		<div className="container mx-auto font-thin">
		<div className="card " >
		<img className="card-img"  style={{opacity: 0.85}}  src={bankImg} alt="Rex" />
		<div className="card-img-overlay text-white" style={{overflowY: "scroll"}}>
			<h1 className="card-title position-relative">GOOD BANK RECORD</h1>
			<button className="card-link btn btn-secondary mt-auto position-absolute top-0 end-0"  style={{  border: "2px solid white"}} onClick={()=>{setLoggedIn(false)}}>Logout</button>
			<div className="card-text lh-l text-center" >
				
				<table className="table  table-hover mx-auto p-5  bg-secondary text-white font-monospace">
					<thead>
						<tr className="fs-4">
							<th>Name</th>
							<th>Email</th>
							<th>Password</th>
							<th>Balance</th>
						</tr>						
					</thead>
					<tbody>
						{dbApp &&(
								dbApp.map((user, i) => 									
									<TableRow key={i} user={user} />
							))}
					</tbody>
				</table>  

			</div>
		</div>
		</div>
	</div>
	)
	};

export default AllDataPage;
