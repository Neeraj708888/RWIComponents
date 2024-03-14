import './Employee.css'

import React from 'react'



  const EmployeeLogin = ()=> {
    
  
  return (
    <div className='login-form'>
      <form action="">
            <h1 >Employee Login</h1>
            <div className="login">
            <label htmlFor="">Username: </label>
            <input type="text" placeholder='username' />
            </div>
            <div className='login'>
            <label htmlFor="">Password: </label>
            <input type="password" placeholder='password' />
            </div>
                <p><span><a href="">forget password</a></span></p>
                <button className='btn'>Login</button>  
        </form> 
    </div>
  )
}

export default EmployeeLogin;
