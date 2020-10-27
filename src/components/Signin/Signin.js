import React, { Component } from 'react';
import classes from './Signin.module.css';
import Input from '../../ui/Input/Input';
// import Button from '../../ui/Button/Button';
import { validityCheckHandler } from '../../hoc/Shared/Utility';
import {updateObject} from '../../hoc/Shared/Utility';
class Signin extends Component{


    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Mail Id'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true

                },
                isValid:false,
                touched:false,
                label:"Email ID:"

            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: true

                },
                isValid:false,
                touched:false,
                label:'Password:'

            }
            
        },
        isSignup:true
    }

    formChangeHandler(event, controlName){
        // console.log(this.state.controls)
        const updateState = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value:event.target.value,
                touched:true,
                isValid: validityCheckHandler(this.state.controls[controlName].value, this.state.controls[controlName].validation)
            })
        });

        this.setState({controls:updateState})
    }
    render(){
        let formeleArray = [];
        for(let key in this.state.controls){
            formeleArray.push({
                id:key,
                config:this.state.controls[key]
            })
           
        }
        let formdata =(
            <form >
                 {formeleArray.map(formelement=>(
                    <Input key={formelement.id}
                    elementType={formelement.config.elementType}
                    elementConfig={formelement.config.elementConfig}
                    value={formelement.config.value} 
                    shouldValidate={formelement.config.validation}
                    changed={(event)=> this.formChangeHandler(event, formelement.id)}
                    touched={formelement.config.touched}
                    invalid={!formelement.config.isValid}
                    // label={formelement.config.label} 
                    />
                        
                    ))}
                    <button clicked={this.submitHandler}>Submit</button>
                </form>

        )
        return(
            <div className={classes.Signin}>
                <div className={classes.InnerBox}>
                    <h1>Sign In</h1>
                    {formdata}
                    <p>Remember ME     Need Help!</p>
                    <p></p>
                </div>
            </div>
        )
    }
}


export default Signin;