import { React, useState } from "react";
import { loginUser } from "../firebase/firebaseAuth";

function LoginText({handleNewPassword}) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");

    const handleUserLogin = (e) => {
        e.preventDefault();
        // Validate user email and password
        loginUser(loginEmail, loginPw);
    }

    return (
        <div className='sign-up-col'>
            <div className='create-account-row'>
                <h2>Login to Your Account</h2>
                <div className='social-links'>
                    <div className='social-col'>
                    <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='social-col'>
                    <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                    <div className='social-col'>
                    <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <span>or use your email and password below:</span>
                </div>
                <form className='sign-up-form' onSubmit={handleUserLogin}>
                    <span id="login-error"><i className="fa-solid fa-circle-exclamation"></i> Incorrect email/password, please try again.</span>
                <div className='name-info style-input'>
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e)=> setLoginEmail(e.target.value)}
                    value={loginEmail}
                    required
                    />
                </div>
                <div className='name-info style-input'>
                    <i className="fa-solid fa-lock"></i>
                    <input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e)=> setLoginPw(e.target.value)}
                    value={loginPw}
                    required
                    />
                    <i className="fa-regular fa-eye"></i>
                    <i className="fa-regular fa-eye-slash"></i>
                </div>
                <button 
                    className='forgot-pw-btn'
                    onClick={handleNewPassword}>Forgot Password?</button>
                <input 
                    className='style-btn'
                    type='submit'
                    value="SIGN IN"
                />

                </form>
                <span>If you'd like to create an account <a className='sign-in-btn'>sign up here</a>.</span>
            </div>
    )
}

export default LoginText;