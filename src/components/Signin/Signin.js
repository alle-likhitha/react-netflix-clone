import React, { Component } from 'react';
import classes from './Signin.module.css';
import Formdata from './Formdata';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Signin extends Component{


    state={
        isSignup: false,
        rememberme: false,
        redirect: null,
        error:null

    }

    CheckBoxHandler(){
        let x = this.state.rememberme
        console.log(x)
        this.setState({rememberme: x})
    }
    submitHandler = (email, password ) => {
        // event.preventDefault();
        // this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        const queryparams = '?email=' +email+'&password='+password
        axios.get('http://localhost:9000/login/verify-login'+queryparams)
            .then(response => {
                console.log(response)
                if (response.data.data){
                        this.setState({redirect:"/"})
                    // dispatch(setAuthRedirectPath('/med', email))
                }else{
                    this.setState({error: response.data.error})
                }
            })
    }



    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div className={classes.Signin}>
                <div className={classes.Box12}>
                <div className={classes.InnerBox123} >
                    <h1>Sign In</h1>
                    {/* {formdata} */}
                    <Formdata requireddet={false} isSign = {this.state.isSignup} onSubmit = {this.submitHandler}/>
                    <label style={{position:"fixed", padding:'10px'}}><input name="Rememberme" type="checkbox" checked={this.state.Rememberme} onChange={this.CheckBoxCheck}/>   Remember Me</label>
                    {/* <p>Need Help!</p> */}

                    <div className={classes.PPdiv}>
                    <p>Login with google</p>
                    <p>New to Netflix? <NavLink to="/auth/signup" style={{color:"red", fontSize:"18px"}}>Signup Now.</NavLink></p>
                    </div>
                    
                </div>
                    
                </div>
            </div>
        )
    }
}


export default Signin;