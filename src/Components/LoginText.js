import React from "react";

function LoginText({handleNewPassword}) {

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
                <form className='sign-up-form'>
                <div className='name-info style-input'>
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
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