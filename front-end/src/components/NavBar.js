import { NavLink } from "react-router-dom";
// react-icons
import { AiFillBank} from "react-icons/ai"
import { MdOutlineAccountBox } from "react-icons/md"
import { GiTakeMyMoney, GiPayMoney } from "react-icons/gi"
import { BiData } from "react-icons/bi"
// logo.png
import logo from "../assets/img/bank-logo.png"
// css
import './NavBar.css';

const NavBar = () => {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);


    return (
      <header className="mb-3">
      <div className="identity">
        <p className="ps-5">
          <i aria-hidden="true"><img src={logo} alt="Bank Logo" width="120px"/><span className="sr-only">Our Bank</span></i>
        </p>
        <a className="hamburger" href="#navbar" aria-label="Open main menu">
          <span className="sr-only">Open main menu</span>
          <i className="fas fa-bars pe-5" aria-hidden="true"></i>
        </a>
      </div>
      <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/" className={getClass}>
            <i aria-hidden="true"> <AiFillBank /> </i> 
            <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Welcome Page"> Home </span>
         </NavLink>
        </li>
        <li><NavLink to="/create" className={getClass}><i aria-hidden="true"><MdOutlineAccountBox  /></i> <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Set-Up An Account">Create Account</span></NavLink></li>
        <li><NavLink to="/deposit" className={getClass}><i aria-hidden="true"><GiPayMoney /></i> <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deposit Funds">Deposit</span></NavLink></li>
        <li><NavLink to="/withdraw" className={getClass}><i aria-hidden="true"><GiTakeMyMoney /></i> <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make A Withdrawal">Withdraw</span></NavLink></li>
        <li className="pe-5"><NavLink to="/all" className={getClass}><i aria-hidden="true"><BiData /></i> <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bank Records">All Data</span ></NavLink></li>
      </ul>
        <a className="close" href="#" aria-label="Close main menu">
          <span className="sr-only">Close main menu</span>
          <i className="fas fa-times pe-5" aria-hidden="true"></i>
        </a>
      </nav>
      </header>


		);
  }

export default NavBar;

