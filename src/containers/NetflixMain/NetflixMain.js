import React, { Component } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import classes from './NetflixMain.module.css';
import MyList from '../../components/MyList/MyList';
import Popup from '../../components/PopUp/Popup';
import Model from '../../ui/Model/Model';

class NetflixMain extends Component{

    state = {
        mylistNames:{
            Mylist: 'My List',
            popular: 'Popular on Netflix',
            newReleases: 'New Releases',
            indian: 'Indian Movies'
        },
        search : false,
        Onclick : false
    }

    OnClickedHandler = () =>{
    let x = !this.state.Onclick
    console.log("clickeddd",x)
    this.setState({Onclick: x})
    
    }
    cancelOrderHandler = () =>{
        this.setState({Onclick:false});
    }

    render(){
        
        let list = Object.keys(this.state.mylistNames)
        .map(igKey =>{
            return <MyList key = {igKey} type={this.state.mylistNames[igKey]} showup={this.OnClickedHandler} />
        })
        let discription = null;
        if(this.state.Onclick){
            discription = <Popup />
        }
        // .map(igKey => {
        //     return [...Array(this.state.mylistNames[igKey] )].map((_,i) => {
        //         return <MyList key = {igKey+i} type={igKey} />
        //     });
        // })
        // .reduce((arr,el)=>{
        //     return arr.concat(el)
        // },[]);

        return(
            <div className={classes.NetflixMain}>
                <Model show={this.state.Onclick} modelClosed={this.cancelOrderHandler}>
                    {discription}
                </Model>
                
                <MainInfo />
                {list}
            </div>

        );
    }
}

export default NetflixMain;