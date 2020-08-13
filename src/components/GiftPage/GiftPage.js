import React from 'react';
import {AiFillGift} from 'react-icons/ai';
import {IoMdShare} from 'react-icons/io';
import {MdPersonPin} from 'react-icons/md';
import {TiMessages} from 'react-icons/ti'
import {GrFormNext} from 'react-icons/gr'
import classes from './GiftPage.module.css';

const GiftPage = props =>{
    return(
        <div className={classes.GiftPage}>
            <AiFillGift size='100px' color = 'red'/><h2 >Give people you love free Netflix.</h2>
            <div className={classes.InnerDiv} style={{display:'block', backgroundColor:'rgb(233, 232, 232)'}}>
                <p>Share this link with friends or family and they'll start watching Netflix.</p>
                <div className={classes.LinkName}>
                    <p>your link!!</p>
                    <button>Copy Link</button>
                </div>

            </div>
            <h4>HOW IT WORKS</h4>
            <div className={classes.InnerDiv} >
                <div className={classes.Stepsdiv}>
                    <IoMdShare size = '60px' style={{alignItems:'center', color:'rgb(92, 92, 92)'}}/>
                    <dl>
                        <dt>Step 1</dt>
                        <dd>Share your link with friends by copying the link.</dd>
                    </dl>
                    {/* <h5>Step 1</h5>
                    <p>Share your link with friends by copying the link.</p> */}
                </div>
                <GrFormNext size='25px' style={{paddingTop:'35px', color:'rgb(92, 92, 92)'}}/>
                <div className={classes.Stepsdiv}>
                <MdPersonPin size = '60px' style={{alignItems:'center', color:'rgb(92, 92, 92)'}}/>
                    <dl>
                        <dt>Step 2</dt>
                        <dd>We'll let you know when a friend signs up.</dd>
                    </dl>
                </div>
                <GrFormNext size='25px' style={{paddingTop:'35px', color:'rgb(92, 92, 92)'}}/>
                <div className={classes.Stepsdiv}>
                <TiMessages size = '60px' style={{alignItems:'center', color:'rgb(92, 92, 92)'}}/>
                    <dl>
                        <dt>Step 3</dt>
                        <dd>You can share with as many friends and family you like.</dd>
                    </dl>
                </div>

            </div>
        </div>
    )
}


export default GiftPage