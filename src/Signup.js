import React from "react";

function Signup({handleLoginToggle}) {


    return (
        <div className="signup">
            <div className='login-container'>
                <section className='sign-up-container'>
                <div className='sign-up-col'>
                    <div className='create-account-row'>
                    <h2>Create Account</h2>
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
                    <span>or use your email for registration:</span>
                    </div>
                    <form className='sign-up-form'>
                    <div className='name-info style-input'>
                        <i className="fa-regular fa-user"></i>
                        <input 
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        required
                        />
                    </div>
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
                    <input 
                        className='style-btn'
                        type='submit'
                        value="SIGN UP"
                    />

                    </form>
                    <span>If you already have an account <a className='sign-in-btn'>sign in here</a>.</span>
                </div>
                </section>
                <section className='sign-in-col' id="style-sign-in">
                <div className='logo'><h1><span>j</span><i className="fa-solid fa-magnifying-glass"></i>bHunt</h1></div>
                <div className='sign-in-txt' >
                    <h2>Welcome Back!</h2>
                    <span>If you already have an account, please login with your personal info</span>
                    <button 
                        className='style-btn'
                        onClick={handleLoginToggle}
                        >SIGN IN</button>
                </div>
                </section>
            </div>
        </div>
    );
}

export default Signup;