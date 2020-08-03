import React, { Component } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import classes from './NetflixMain.module.css';
import MyList from '../../components/MyList/MyList';

class NetflixMain extends Component{
    render(){
        return(
            <div className={classes.NetflixMain}>
                <MainInfo />
                <MyList > My List</MyList>
                <MyList >Popular on Netflix</MyList>
                <MyList >New Releases</MyList>
                <MyList >Indian Movies</MyList>
            </div>

        );
    }
}

export default NetflixMain;