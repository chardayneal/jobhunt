import { React, useState } from "react";

// components
import LoginText from "./Components/LoginText";
import ForgotPw from "./Components/ForgotPw";

function Login(props) {
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleNewPassword = () => {
        setForgotPassword(!forgotPassword);
        console.log(forgotPassword);
    };

    return (
        <div className="signup">
        <div className='login-container'>
            <section className='sign-in-col'>
            <div className='logo'><h1><span>j</span><i className="fa-solid fa-magnifying-glass"></i>bHunt</h1></div>
            <div className='sign-in-txt'>
                <h2>Sign Up</h2>
                <span>Create an account to manage the progress of your job hunt</span>
                <button 
                    className='style-btn'
                    onClick={props.handleLoginToggle} 
                    >SIGN UP</button>
            </div>
            </section>

            <section className='sign-up-container forgot-pw-container'>
            { forgotPassword ? <LoginText handleNewPassword={handleNewPassword}/> : <ForgotPw handleBackBtn={handleNewPassword} /> }
            </section>
        </div>
    </div>
    )
}

export default Login;