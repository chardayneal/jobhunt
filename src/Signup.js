import {React, useState} from "react";
import {createNewUser} from "./firebase/firebaseAuth";
import { Link } from "react-router-dom";

function Signup() {
    const [userName, setUserName] = useState("");


    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");



    const handleNewUserForm = () => {
        // DETERMINE IF EMAIL IS AVAILABLE
        //  IF AVAILABLE...
        createNewUser(userName, userEmail, userPassword);

    }

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
                    <form className='sign-up-form' onSubmit={handleNewUserForm}>
                    <div className='name-info style-input'>
                        <i className="fa-regular fa-user"></i>
                        <input 
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        onChange={(e)=> {setUserName(e.target.value)}}
                        value={userName}
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
                        onChange={(e)=> {setUserEmail(e.target.value)}}
                        value={userEmail}
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
                        onChange={(e)=> {setUserPassword(e.target.value)}}
                        value={userPassword}
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
                    <span>If you already have an account <Link to='/login' className='sign-in-btn'>sign in here</Link>.</span>
                </div>
                </section>
                <section className='sign-in-col' id="style-sign-in">
                <Link to='/' className='logo'><h1><span>j</span><i className="fa-solid fa-magnifying-glass"></i>bHunt</h1></Link>
                <div className='sign-in-txt' >
                    <h2>Welcome Back!</h2>
                    <span>If you already have an account, please login with your personal info</span>
                    <Link to='/login' className='style-btn'>SIGN IN</Link>
                </div>
                </section>
            </div>
        </div>
    );
}

export default Signup;