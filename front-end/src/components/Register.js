import React, { useContext } from "react"
// icons
import { MdOutlinePersonOutline } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { TbPassword } from "react-icons/tb"
import bankImg from "../assets/img/bank-main.jpg"
import "./form.css"
// useContext
import { BankContext } from '../assets/context/BankContext';
// fromik and yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = ({changeOption}) => {
  const {dbApp, setDBapp} = useContext(BankContext);

  const initialData = {
    "name": "",
    "email": "",
    "password": "",
    "balance": 0
  }

  const formik = useFormik({
    initialValues: { ...initialData },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit:(values) => {
      setDBapp([...dbApp, values]);
      alert(`User Created: ${JSON.stringify(values)}`)
      // const para = document.createElement("p");
      // para.className = "fs-2 bg-light"
      // const node = document.createTextNode("This is new.");
      // para.appendChild(node); 
    }
  });

  return (
    <div className="container mx-auto font-thin mt-5">
      <div className="card " >
        <img className="card-img"  style={{opacity: 0.85}}  src={bankImg} alt="Bank" />
        <div className="card-img-overlay text-white">
          <h1 className="card-title">REGISTER WITH GOOD BANK</h1>
          <div className="card-text lh-sm">
            <div className="container  text-dark">
              <form className="inputForm" onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3 input-container">
                  <MdOutlinePersonOutline className="icon fa-lg"/>
                  <input className="form-control" id="name" name="name" type="text" placeholder="Name" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? <p className="text-danger fs-5 error-message">{formik.errors.name}</p>:null}
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <HiOutlineMail className="icon fa-lg"/>
                  <input className="form-control" id="email" name="email" type="email" placeholder="Email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? <p className="text-danger fs-5 error-message">{formik.errors.email}</p>:null}

                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <TbPassword className="icon fa-lg"/>
                  <input className="form-control" id="password" name="password" type="password" placeholder="Password" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? <p className="text-danger fs-5 error-message">{formik.errors.password}</p>:null}
                  <label htmlFor="password">Password</label>
                </div>
                <div className="btn-group gap-1 btn-group-vertical btn-group-lg " role="group" aria-label="Login Buttons">
                  <div className="btn-group gap-1 btn-group-lg" role="group" aria-label="Login Buttons">
                    <button  id="submit" type="button"  className="card-link btn btn-secondary mt-auto" disabled={!(formik.isValid && formik.dirty)} onClick={formik.handleSubmit}>Submit</button>
                    <button  id="reset" type="button" className="card-link btn btn-secondary mt-auto"  onClick={formik.handleReset} disabled={false}>Reset</button>
                  </div>
                  <button id="register" type="button" className="card-link btn btn-secondary mt-auto" onClick={() => changeOption('login')}>To Login Page.</button>
                </div>
              </form>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
