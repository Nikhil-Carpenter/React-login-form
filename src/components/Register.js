import React, { useState, useEffect } from "react";
import registerimg from "../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const Register = ({ onLogin, onPasswordVisible, onTogglePassword }) => {

  const [showIndicator, setShowIndicator] = useState(false);
  const [password, setPassword] = useState("");

  const [passwordLetter, setPasswordLetter] = useState(false);
  const [passwordCharacter, setPasswordCharacter] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const [passwordComplete, setPasswordComplete] = useState(false);



  const handleFocus = () => {
    setShowIndicator(true);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // console.log(password);
  };

  useEffect(() => {
    // check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPasswordLetter(true);
    } else {
      setPasswordLetter(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setPasswordNumber(true);
    } else {
      setPasswordNumber(false);
    }

    // Check For Special char
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPasswordCharacter(true);
    } else {
      setPasswordCharacter(false);
    }

    // Check for 8 char

    if (password.length >= 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    //check for complete
    if (passwordLetter&&passwordNumber&&passwordCharacter&&passwordLength) {
        setPasswordComplete(true);
    }else{
        setPasswordComplete(false)
    }
  }, [password,passwordCharacter,passwordLength,passwordLetter,passwordNumber]);

  return (
    <div className="main-container --card --flex-center ">
      <div className="form-container --w50 --p2">
        <form className="--form-control --w100 --dir-column ">
          <h2 className="--text-center --color-danger">Register</h2>
          <div>
            <input className="--w100" type="text" placeholder="UserName" />
          </div>
          <div>
            <input className="--w100" type="email" placeholder="Email" />
          </div>
          <div className="password">
            <input
              onFocus={handleFocus}
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
            <button
              disabled={!passwordComplete}
              className={
                passwordComplete
                  ? "--btn-primary --btn --btn-lg --btn-block"
                  : "--btn-primary --btn --btn-lg --btn-block btn-disabled"
              }
            >
              Register
            </button>
          </div>
          {/* <span className='--text-xs'>Forgot password?</span> */}
          <p>
            Have an account?{" "}
            <span onClick={onLogin} className="--pointer --underline">
              Login
            </span>
          </p>

          {/* Password Strength Indicator */}
          <div
            className={
              showIndicator
                ? "show-indicator --card --bg-grey --p --dir-column"
                : "hide-indicator --card --bg-grey --p --dir-column"
            }
          >
            <h5 className="--fw-base">Password Strength Indicator</h5>
            <ul>
              <li
                className={
                  passwordLetter
                    ? "pass-green --flex-start --align-center"
                    : "pass-red --flex-start --align-center"
                }
              >
                {passwordLetter ? <FaCheck /> : <GoPrimitiveDot />}
                &nbsp;&nbsp;
                <small> LowarCase & UpperCase</small>
              </li>

              <li
                className={
                  passwordNumber
                    ? "pass-green --flex-start --align-center"
                    : "pass-red --flex-start --align-center"
                }
              >
                {passwordNumber ? <FaCheck /> : <GoPrimitiveDot />}
                &nbsp;&nbsp;
                <small>Numbers (0-9)</small>
              </li>

              <li
                className={
                  passwordCharacter
                    ? "pass-green --flex-start --align-center"
                    : "pass-red --flex-start --align-center"
                }
              >
                {passwordCharacter ? <FaCheck /> : <GoPrimitiveDot />}
                &nbsp;&nbsp;
                <small>Special Character (!@$%^&*~?)</small>
              </li>

              <li
                className={
                  passwordLength
                    ? "pass-green --flex-start --align-center"
                    : "pass-red --flex-start --align-center"
                }
              >
                {passwordLength ? <FaCheck /> : <GoPrimitiveDot />}
                &nbsp;&nbsp;
                <small>Atleast 8 Character</small>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container --h100 --w50 --bg-primary">
        <img src={registerimg} className="--w100 --h100" alt="loginimg" />
      </div>
    </div>
  );
};

export default Register;
