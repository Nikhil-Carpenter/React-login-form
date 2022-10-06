import React,{useState} from 'react'
import Login from './Login';
import "./Authcontainer.css"
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {
  //using one useState as obj

  const [auth,setAuth] = useState({
    login:true,
    register:false,
    reset:false
  })

  // using multiple useState
  // const [login,setLogin] = useState(true);
  // const [register,setRegister] = useState(false);
  // const [reset,setReset] = useState(false);

  const handleRegister = ()=>{
    setAuth({ login:false, register:true, reset:false })
    // setLogin(false);
    // setReset(false);
    // setRegister(true);
  }

  const handleReset = ()=>{
    setAuth({ login:false, register:false, reset:true })
    // setLogin(false);
    // setReset(true);
    // setRegister(false);
  }

  const handleLogin = () =>{
    setAuth({ login:true, register:false, reset:false })
    // setReset(false);
    // setLogin(true);
    // setRegister(false)
  }


  return (
    <section className='--flex-center --100vh'>
        <div className="container box">

          { auth.login && <Login onRegister={handleRegister} onReset={handleReset}/> }
          { auth.register && <Register onLogin={handleLogin} />}
          { auth.reset && <Reset onLogin={handleLogin}/> }
        
        </div>
    </section>
  )
}

export default AuthContainer;