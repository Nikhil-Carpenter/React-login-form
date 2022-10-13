import React from 'react'
import Resetimg from "../assets/forgot.svg"
import {AiOutlineCloseCircle} from "react-icons/ai"

const Reset = ({onLogin}) => {
  return (
    <div className='main-container --card --flex-center reset ' >
        
        <div className="form-container --w50 --h100 ">
            <form className='--form-control --p2 --dir-column '>
                <h2 className='--text-center --color-danger'>Reset Password</h2>
                
                <div>
                    <input className='--w100' type="email" placeholder='Email'/>
                </div>
               
                <div>
                    <button className='--btn-primary --btn --btn-lg --btn-block'>Reset Password</button>
                </div>
                <span className='--text-xs'>We will send you a reset link!!!</span>
                               
            </form>
            <div onClick={onLogin} className='close --text-lg'>
                  <AiOutlineCloseCircle/>  
            </div> 
        </div>
        <div className='img-container --h100 --w50 --bg-primary'>
            <img  src={Resetimg} className="--w100 --h100" alt="loginimg" />
        </div>
    </div>
  )
}

export default Reset;