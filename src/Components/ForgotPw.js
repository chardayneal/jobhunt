import React from "react";

function ForgotPw({handleBackBtn}) {
    return (
        <>
        <button 
                className="back-btn"
                onClick={handleBackBtn}>
                <i className="fa-solid fa-arrow-left-long"></i>
                <span>Back</span>
            </button>
            <div className='create-account-row'>
                <h2>Forgot Your Password?</h2>
                <span>Receive email to create new password:</span>
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
                <input 
                    className='style-btn'
                    type='submit'
                    value="REQUEST NEW PASSWORD"
                />
                </form>
        </>
    );
}

export default ForgotPw;