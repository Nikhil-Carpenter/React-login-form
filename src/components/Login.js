import React from 'react'
import loginimg from "../assets/login.svg";

const Login = ({onRegister,onReset}) => {
  return (
    <div className='main-container --card --flex-center ' >
        <div className='img-container --h100 --w50 --bg-primary'>
            <img  src={loginimg} className="--w100 --h100" alt="loginimg" />
        </div>
        <div className="form-container --w50">
            <form className='--form-control --p2 --dir-column'>
                <h2 className='--text-center --color-danger'>Login</h2>
                <div>
                    <input className='--w100' type="text" placeholder='UserName'/>
                </div>
                <div>
                    <input className='--w100' type="password" placeholder='Password'/>
                </div>
                <div>
                    <button className='--btn-primary --btn-lg --btn --btn-block'>Login</button>
                </div>
                <span onClick={onReset} className='--text-xs --pointer'>Forgot password?</span>
                <p>Don't have an account? <span onClick={onRegister} className='--pointer'>Register</span></p>
            </form>
        </div>
    </div>
  )
}

export default Login;