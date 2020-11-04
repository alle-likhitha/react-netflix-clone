import React, { Component } from 'react';
// import Aux from '../../hoc/Aux/Aux';
import classes from './MainInfo.module.css';
// import money from '../../assets/images/money.png';
import friends from '../../assets/images/friends.png'
import Button from '../../ui/Button/Button';
import {BsFillPlayFill} from 'react-icons/bs';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { Redirect } from 'react-router-dom'



class MainInfo extends Component{
    state={
        play:false
    }
    onPlayHandler = props =>{
        this.setState({play: true})
    }


    render(){

        if(this.state.play){
            return <Redirect to='/playcontent' />
        }
        
        return(
       
            <div className={classes.MainInfo}>
                
                <div className={classes.ImgDiv}>
                    <img style={{height:'150px', width:'400px', padding:'0 0 15px 40px'}} src={friends} alt = 'Friends icon' />
                
                <div className={classes.Topshow}>
                <svg className={classes.SvgTag}>
                <rect width="30" height="35" fill='black'></rect>
                <text x="40%" y="60%" fill='black'>-</text>        
                </svg>
                <h4 style={{color:'white', top:0, textAlign:'center'}}>#5 in Tv Shows Today</h4>
                    
                </div >
                
                <div className={classes.paraDiv}>
                <p>So no one told you life was gonna be this way
                    Your job's a joke, you're broke
                Your love life's D.O.A
                </p>
                
                </div>
    
                <div className={classes.buttonDiv}>
                <Button iconname={{icon: BsFillPlayFill}} clicked={this.onPlayHandler}>Play</Button>
                <Button iconname={{icon: AiOutlineInfoCircle}}>Info</Button>
                </div>
                
                </div>
            </div>
        )
}}

export default MainInfo;