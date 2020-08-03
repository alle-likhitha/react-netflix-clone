import React from 'react';
// import Aux from '../../hoc/Aux/Aux';
import classes from './MainInfo.module.css';
import money from '../../assets/images/money.png';
import Button from '../../ui/Button/Button';

const MainInfo = props =>{
    return(
       
        <div className={classes.MainInfo}>
            <div className={classes.ImgDiv}>
                <img style={{padding:'0 0 15px 40px'}} src={money} alt = 'MONEY HEIST' />
                
            <div className={classes.Topshow}>
            <svg className={classes.SvgTag}>
            <rect width="30" height="35" fill='black'>
                    <text style={{color: 'white'}}>Top 10</text>
                    {/* <text fill="white">Hello</text> */}
                    </rect>
            </svg>
            <h4 style={{color:'white', top:0, textAlign:'center'}}>#7 in Tv Shows Today</h4>
                
            </div >
            <div className={classes.paraDiv}>
            <p>Money Heist series traces two long-prepared heists led by the Professor,
                 one on the Royal Mint of Spain, and one on the Bank of Spain.</p>
            </div>
            <Button><i> </i>Play</Button>
            
            </div>
           

        </div>
    );

}

export default MainInfo;