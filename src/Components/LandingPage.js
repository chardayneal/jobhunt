import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1> Welcome to the jobHunt</h1>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
        

    )
}

export default LandingPage;