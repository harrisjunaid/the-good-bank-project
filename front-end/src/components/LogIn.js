import React, { useContext } from "react"
//icons
import { HiOutlineMail } from "react-icons/hi"
import { TbPassword } from "react-icons/tb"
// background image
import bankImg from "../assets/img/bank-main.jpg"
// app context
import { BankContext } from "../assets/context/BankContext"
// formik
import { useFormik } from 'formik'
import * as Yup from 'yup'
// css
import "./form.css"

const Login = ({ changeOption }) => {
  // load data from user context
  const {setLoggedIn, setUserIndex, dbApp} = useContext(BankContext);
  // data for formik initialValues
  const initialData = {
    "email": "",
    "password": ""
  }
  /**
   * calls userCheck on submit
   */
  const formik = useFormik({
    initialValues: { ...initialData },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit:(values) => {
      if(!(userCheck(values)))alert("EMAIL AND PASSWORD DO NOT MATCH: 👾")}
  });  
  // find in dbApp
  const activeCustomer = (values) => {
    const i =  dbApp.findIndex((e) => e.email === values.email); // find index
    if(i>-1) { // execute if index found
      setUserIndex(i); //store index
      return (
        dbApp[i].password === values.password ? true : false
    )}
    return false
  }
  // called by onSubmit
  const userCheck = (values) => {    
    if(activeCustomer(values)){  // check in dbApp
      setLoggedIn(true) // set logged-in flag to true
      return true
    }
    return false
  }
  return (
    <div className="container mx-auto font-thin mt-5">
      {/*Bootstrap Card */}
      <div className="card " >
        <img className="card-img"  style={{opacity: 0.85}}  src={bankImg} alt="Bank" />
        <div className="card-img-overlay text-white">
          <h1 className="card-title">REGISTER WITH GOOD BANK</h1>
          <div className="card-text lh-sm">
            <div className="container  text-dark">
              {/*input form */}
              <form className="inputForm" onSubmit={formik.handleSubmit}>

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
                  <button id="register" type="button" className="card-link btn btn-secondary mt-auto" onClick={() => changeOption('register')}>To Register Page</button>
                </div>
                
              </form>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login