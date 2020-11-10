import React, { Component } from 'react';
import classes from './Accounts.module.css'
import Thor from '../../assets/images/thor.png'
import Ironman from '../../assets/images/iron2.jpeg'
import Deadpool from '../../assets/images/deadpool.png'
import Spiderman from '../../assets/images/spiderman.png'
import Button from '../../ui/Button/Button';
import {RiLogoutCircleLine} from 'react-icons/ri'
import {Redirect} from 'react-router-dom';



class Accounts extends Component{
    state = {
        logout:null
    }

    onClickLogout = ()=>{
        this.setState({logout:true})
    }
    render(){
        if(this.state.logout){
            return <Redirect to='/auth' />
        }
        return(
            <div className={classes.Accounts}>
                <div className={classes.Div}>
                <img className={classes.Img} src={Ironman} alt="profilepic" />
                <p >Iron Man</p>
                </div>
                <div className={classes.Div}>
                <img className={classes.Img} src={Deadpool} alt="profilepic" />
                <p >Deadpool</p>
                </div>
                <div className={classes.Div}>
                <img className={classes.Img} src={Spiderman} alt="profilepic" />
                <p >Spiderman</p>
                </div>
                <div className={classes.Div}>
                <img className={classes.Img} src={Thor} alt="profilepic" />
                <p >Thor</p>
                </div>
                
                <p>Welcome to Netflix</p>
                <p >Accounts</p>
                <Button iconname={{icon: RiLogoutCircleLine}} clicked={this.onClickLogout}>Logout</Button>
                
            </div>
        )
    }
    
    
}


export default Accounts   