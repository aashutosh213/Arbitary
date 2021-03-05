import React from 'react';
import Topbar from "../TopbarSignup/Topbar";
import SigninForm from "../SigninForm/SigninForm";
import './SignUp.css';

const SignUp = () => {
    return (
        <div className ="signup">
            <Topbar/>
            <SigninForm/>
        </div>
    );
};

export default SignUp;