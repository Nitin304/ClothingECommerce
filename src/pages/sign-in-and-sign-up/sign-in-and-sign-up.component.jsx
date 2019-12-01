import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

const SignAndSignUp = ()=>(
    <div className="signAndSignUp">
        
            <SignIn></SignIn>
        
            <SignUp></SignUp>
    </div>
)

export default SignAndSignUp;