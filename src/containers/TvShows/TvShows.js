import React, { Component } from 'react';
import MyList from '../../components/MyList/MyList';
import classes from './TvShows.module.css'


class TvShows extends Component{
    render(){
        return(
            <div className={classes.TvShows}>
            <h1 style={{margin:'100px 0 0 0', textAlign:'center', color:'white'}}>TV SHOWS</h1>
            <MyList type='FAV'></MyList>
            </div>
            
        );
    }
}

export default TvShows;