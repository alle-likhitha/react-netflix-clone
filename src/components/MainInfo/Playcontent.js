/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'
import Button from '../../ui/Button/Button';
import {FiXCircle} from 'react-icons/fi';
// import { useHistory } from 'react-router-dom';
import classes from './MainInfo.module.css';
import { Redirect } from 'react-router-dom'

    
class Playcontent extends Component{
    state={
        close: false
    }
    historyHandler = () =>{
        
        console.log("aksjghdkjqsgdkjhsgd")
        this.setState({close:true})
    }
    render(){
    if(this.state.close){
        return(<Redirect to='/' />)
    }
    
    return(
        <div className={classes.Playdiv}>
            <h1> Friends Funny Moments</h1>
            <Button iconname={{icon:FiXCircle}} clicked={this.historyHandler}>Close Player</Button>
            <iframe width="100%" height="700px" src="">
        </iframe>
        </div>

    )
}
}


export default Playcontent