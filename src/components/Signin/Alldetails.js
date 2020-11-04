import React from 'react';
import classes from './Signin';
import Formdata from './Formdata';
// import {NavLink} from 'react-router-dom';
import Logo from '../Logo/Logo';



const Alldel = props =>{
    return(
        <div>
            <div className={classes.Box12} style={{backgroundColor:'black', padding:"50px 0 50px 0"}}>
                <div className={classes.InnerBox123} >
                    <Logo height='100px' />
                    <h1>Please complete </h1>
                        <h1>the Sigup process</h1>
                    {/* {formdata} */}
                    <Formdata requireddet={true} />

                    {/* <p>Need Help!</p> */}

                    <div className={classes.PPdiv} style={{fontSize:"20px"}}>
                    <p>Free for 30 days!</p>
                    <p>Enjoy all the Latest Movies and Seies in just one Click</p>
                    </div>
                    
                </div>
                    
                </div>
        </div>
    )
}

export default Alldel