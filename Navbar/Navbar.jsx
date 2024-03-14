import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import EmployeeLogin from '../Employee/EmployeeLogin';
import Login from '../Admin/Login';
import '../Employee/Employee.css'


const Navbar = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  // const showSettings = (event) => {
  // event.preventDefault();
  // setOpen(true);
  // }

  const onOpenAdmin = () => {
    setIsOpen(!isOpen);  // true
    setIsOpen(true);

  }
  const onOpenEmployee = () => {
    setIsOpen(!isOpen);
    // we dont need to false value here...
    setIsOpen(false);  
  }

  return (
    <>
      <div className="menu-button">
        <button className='btn' onClick={onOpenAdmin}>Admin Login</button>
        <button className='btn' onClick={onOpenEmployee}>Employee Login</button>
      </div>
      {/* Conditional Rendering  with ternary operator*/}
      { isOpen ? <Login/> : <EmployeeLogin/> }
 
  
    </>
  )
}

export default Navbar;