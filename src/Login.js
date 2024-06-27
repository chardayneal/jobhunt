import { React, useState } from "react";

// components
import LoginText from "./Components/LoginText";
import ForgotPw from "./Components/ForgotPw";
import { Link } from "react-router-dom";

function Login() {
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleNewPassword = () => {
        setForgotPassword(!forgotPassword);
        console.log(forgotPassword);
    };

    return (
        <div className="signup">
        <div className='login-container'>
            <section className='sign-in-col'>
            <Link to='/' className='logo'><h1><span>j</span><i className="fa-solid fa-magnifying-glass"></i>bHunt</h1></Link>
            <div className='sign-in-txt'>
                <h2>Sign Up</h2>
                <span>Create an account to manage the progress of your job hunt</span>
                <Link to='/signup' className='style-btn'>SIGN UP</Link>
            </div>
            </section>

            <section className='sign-up-container forgot-pw-container'>
            { forgotPassword ? <ForgotPw handleBackBtn={handleNewPassword} /> : <LoginText handleNewPassword={handleNewPassword}/> }
            </section>
        </div>
    </div>
    )
}

export default Login;