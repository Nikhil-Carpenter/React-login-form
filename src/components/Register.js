import React from 'react'
import registerimg from "../assets/register.svg";

const Register = ({onLogin}) => {
  return (
    <div className='main-container --card --flex-center ' >
        
        <div className="form-container --w50">
            <form className='--form-control --dir-column '>
                <h2 className='--text-center --color-danger'>Register</h2>
                <div>
                    <input className='--w100' type="text" placeholder='UserName'/>
                </div>
                <div>
                    <input className='--w100' type="email" placeholder='Email'/>
                </div>
                <div>
                    <input className='--w100' type="password" placeholder='Password'/>
                </div>
                <div>
                    <button className='--btn-primary --btn --btn-lg --btn-block'>Register</button>
                </div>
                {/* <span className='--text-xs'>Forgot password?</span> */}
                <p>Have an account? <span onClick={onLogin} className='--pointer'>Login</span></p>
            </form>
        </div>
        <div className='img-container --h100 --w50 --bg-primary'>
            <img  src={registerimg} className="--w100 --h100" alt="loginimg" />
        </div>
    </div>
  )
}

export default Register;