import React, { Component } from 'react';
import classes from './Signin.module.css';
import Formdata from './Formdata';
import { NavLink } from 'react-router-dom';
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
                    <p>New to Netflix? <NavLink to="/auth/signup">Signup Now.</NavLink></p>
                    </div>
                    
                </div>
                    
                </div>
            </div>
        )
    }
}


export default Signin;