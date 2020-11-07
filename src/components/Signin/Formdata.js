import React, { Component } from 'react';
import { validityCheckHandler, updateObject } from '../../hoc/Shared/Utility';
import Input from '../../ui/Input/Input';
import classes from './Signin.module.css';


class Formdata extends Component{

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
        alldetails:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Full Name'
                },
                value:'',
                validation:{
                    required:false,
                    minLength: true

                },
                isValid:false,
                touched:false,
                label:'Name'
            },
            phone:{
                elementType:'input',
                elementConfig:{
                    type:'phone',
                    placeholder:'Phone Number'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: true

                },
                isValid:false,
                touched:false,
                label:'Phone Number'
            },
            dob:{
                elementType:'input',
                elementConfig:{
                    type:'date',
                    placeholder:'dateofbirth'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: true

                },
                isValid:false,
                touched:false,
                label:'Date Of Birth'
            }

        },
        isSignup:true,
        requrieddetails:false
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
    allChange(event, controlName){
        // console.log(this.state.controls)
        const updateState = updateObject(this.state.alldetails, {
            [controlName]: updateObject(this.state.alldetails[controlName], {
                value:event.target.value,
                touched:true,
                isValid: validityCheckHandler(this.state.alldetails[controlName].value, this.state.alldetails[controlName].validation)
            })
        });

        this.setState({alldetails:updateState})
    }
    lalaHandler = ( event ) => {
        event.preventDefault();
        this.props.onSubmit(this.state.controls.email.value, this.state.controls.password.value, true);
    }
    lalalaHandler = ( event ) => {
        event.preventDefault();
        this.props.authsignup(this.state.alldetails.name.value,
            this.state.alldetails.phone.value,
            this.state.alldetails.dob.value
        )
    }

    render(){
        let formeleArray = [];
        // console.log(this.props.requireddet)
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
                    <button className={classes.Button}
                    // onClick={() =>{this.props.onSubmit(this.state.controls.email.value, this.state.controls.password.value, true)}}>
                    onClick={this.lalaHandler}> 
                        Continue</button>
                </form>

        )
        let alld = []
        if(this.props.requireddet){
        for(let key in this.state.alldetails){
            alld.push({
                id:key,
                config:this.state.alldetails[key]
            })
        formdata = (
            <form >
                 {alld.map(formelement=>(
                    <Input key={formelement.id}
                    elementType={formelement.config.elementType}
                    elementConfig={formelement.config.elementConfig}
                    value={formelement.config.value} 
                    shouldValidate={formelement.config.validation}
                    changed={(event)=> this.allChange(event, formelement.id)}
                    touched={formelement.config.touched}
                    invalid={!formelement.config.isValid}
                    // label={formelement.config.label} 
                    />
                        
                    ))}
                    <button className={classes.Button}
                    onClick={this.lalalaHandler}>Sign In</button>
                </form>
        )
        }
        }
        return(
            <div className={classes.Box12}>
                {formdata}
                {/* {alldetails} */}
            </div>
        )
    }
}


export default Formdata