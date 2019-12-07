import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.util';

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

    handleSubmit = async event=>{
        event.preventDefault();
       const {displayName,email,password,confirmPassword} = this.state;
       if(password !== confirmPassword ){
           alert("Password does not match");
           return;
       }
       try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName});
           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
       }
       catch(e){
        console.log(e);
       }
    }

    render(){
       return( <div className="sign-up">
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput name="displayName" value={this.state.displayName} type="text" required
                handleChange={this.handleChange} label="Display Name"/>
                
                <FormInput name="email" value={this.state.email} type="email" required
                handleChange={this.handleChange}  label="Email"/>

                <FormInput name="password" value={this.state.password} type="password" required
                handleChange={this.handleChange}  label="Password"/>

                <FormInput name="confirmPassword" value={this.state.confirmPassword} type="password" required
                handleChange={this.handleChange}  label="Confirm Password"/>
                
                <CustomButton tpye="submit">SIGN UP</CustomButton>
            </form>
        </div>

       )
    }
}

export default SignUp;