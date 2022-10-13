import React, {useState} from 'react'
import loginimg from "../assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const Login = ({onRegister,onReset,onPasswordVisible,onTogglePassword}) => {
    const [password, setPassword] = useState("");

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        // console.log(password);
      };

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
                <div className="password">
                    <input
                    // onFocus={handleFocus}
                    className="--w100"
                    type={onPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    <span onClick={onTogglePassword} className="icon">
                    {onPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                 </div>
                <div>
                    <button className='--btn-primary --btn-lg --btn --btn-block'>Login</button>
                </div>
                <span onClick={onReset} className='--text-xs --underline --pointer'>Forgot password?</span>
                <p>Don't have an account? <span onClick={onRegister} className='--pointer --underline'>Register</span></p>
            </form>
        </div>
    </div>
  )
}

export default Login;