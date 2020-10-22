import React from 'react';
import Friends from '../../assets/images/friends3.jpg';
import Button from '../../ui/Button/Button';
import {BsFillPlayFill} from 'react-icons/bs';
import classes from './Popup.module.css'

const Popup = props =>{


    return(
        <div className={classes.Popup}>
            
             {/* <div style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.952),rgba(248, 248, 248, 0)), url("../../assets/images/friendswall2.jpg")'}}>  */}
            <div className={classes.Adiv}>
                <img className={classes.Aimg} src={Friends} alt= "aksjndalksnd"/>
                <div style={{margin:"300px 0 0px 30px"}}>
                    <p style={{fontFamily:"Impact, Charcoal, sans-serif", fontSize:"30px"}}>Money Heist</p>
                    <br />
                    <div className={classes.Poprow}>
                    <Button iconname={{icon: BsFillPlayFill}}>Play</Button>
                    <p >sdf</p>
                    <p>sdf</p>
                    <p>sdf</p>
                    </div>
                </div>
            </div>


            <div className={classes.Adiv} style={{height:"200px", justifyContent:"space-between"}}>
            <div className={classes.Poplala} style={{width:"600px"}}>
                <div className={classes.Poprow}>
                    <p style={{color:"rgb(146, 236, 55)", fontSize:"bold"}}>98% Match</p>
                    <p>2018</p>
                    <p>1 Season</p>
                    
                </div>
                <p style={{textAlign:"left", paddingLeft:"30px", fontSize:"18px"}}>Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.</p>
            </div>
            <div className={classes.Poplala}>
                    <p>Genere: Action, Adventure, Comedy, Crime, Drama</p>
                    <p>Cast: SADF, SADFSDfsdfsdf, Sfghfhfgh, hghfghfghgghfd, fjshgfdg, kajshbdgahsgd, kjahsdguagd</p>
            </div>
            </div>
        </div>
    )
}


export default Popup;