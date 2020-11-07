import React, { Component } from 'react';
import classes from './Signin.module.css';
import Formdata from './Formdata';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

class Signin extends Component{


    state={
        isSignup: true,
        rememberme: false

    }

    CheckBoxHandler(){
        let x = this.state.rememberme
        console.log(x)
        this.setState({rememberme: x})
    }
    submitHandler = (email, password, event ) => {
        event.preventDefault();
        // this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        const queryparams = '?email=' +email+'&password='+password
        axios.get('http://localhost:9000/login/verify-login'+queryparams)
            .then(response => {
                console.log(response)
                if (response.data.data){

                    // dispatch(setAuthRedirectPath('/med', email))
                }else{
                    // dispatch(authFail(response.data.error));
                }
            })
    }



    render(){

        return(
            <div className={classes.Signin}>
                <div className={classes.Box12}>
                <div className={classes.InnerBox123} >
                    <h1>Sign In</h1>
                    {/* {formdata} */}
                    <Formdata requireddet={false} isSign = {this.state.isSignup}/>
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