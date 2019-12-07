import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle,auth} from '../../firebase/firebase.util';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }
        catch(e){
            alert(e.message);
        }        
    }
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} type="email" required
                    handleChange={this.handleChange} label="email"/>
                   
                    <FormInput name="password" value={this.state.password} type="password" required
                    handleChange={this.handleChange}  label="password"/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign In with Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;