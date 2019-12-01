import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }

    render(){
       return( <div className="sign-up">
            <h1>I already have an account</h1>
            <span>Sign In with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="displayName" value={this.state.displayName} type="text" required
                handleChange={this.handleChange} label="display name"/>
                
                <FormInput name="email" value={this.state.email} type="email" required
                handleChange={this.handleChange}  label="email"/>

                <FormInput name="password" value={this.state.password} type="password" required
                handleChange={this.handleChange}  label="password"/>

                <FormInput name="confirmPassword" value={this.state.confirmPassword} type="password" required
                handleChange={this.handleChange}  label="confirm password"/>
                
                <CustomButton tpye="submit">Sign Up</CustomButton>
            </form>
        </div>

       )
    }
}

export default SignUp;