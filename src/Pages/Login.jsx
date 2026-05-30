import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'



const Login = ({handleLogin}) => {
      
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }



    return (
        <div className='loginMain'>
            <h1>Welcome to Employee Management System</h1>
            <div className='login_main'>
                <h1>Access Portal</h1>
                <div>
                    <form className='login_form' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <label>Email Address</label>
                        <input value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        required
                        type="email" placeholder='Enter Your Email' />
                        <br />
                        <label>Password</label>
                        <input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }} 
                        type="password" placeholder='Enter Your Password' />
                        <br />
                        <button>Authenticate</button>
                    </form>
                </div>
                {/* <h3>No account yet? </h3> */}
            </div>
        </div>
    )
}

export default Login
