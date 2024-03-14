import './Login.css'

import React from 'react'

const Login = () => {

  return (

    <div className='login-form'>
        <form action="" >
            <h1 >Admin Login</h1>
            <div className="login">
            <label htmlFor="">Username: </label>
            <input type="text" placeholder='username' />
            </div>
            <div className='login'>
            <label htmlFor="">Password: </label>
            <input type="password" placeholder='password' />
            </div>
            <button className='login-btn'>Login</button>
        </form> 
    </div>

  )
}

export default Login
