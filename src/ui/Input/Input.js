import React from 'react';
import classes from './Input.module.css'

const input =(props)=>{
    

    let inputEle = null;
    const inputClasses = [classes.InputEle];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType){
        case('input'):
            // <label>{props.value}</label>
            inputEle=<input  className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={props.changed} />
            break;
        case('textarea'):
            inputEle=<textarea  className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case('select'):
            inputEle=<select  className={inputClasses.join(' ')}
             value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option =>(
                    <option value={option.value} key={option.value}  > 
                    {option.displayValue}
                    </option>
                ))}
             </select>
            break;    
        default:
            inputEle=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}  onChange={props.changed}/>    
    }
    
    
    
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label} </label>
            {inputEle}
        </div>
    );
}

export default input;