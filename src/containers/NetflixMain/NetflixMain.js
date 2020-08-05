import React, { Component } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import classes from './NetflixMain.module.css';
import MyList from '../../components/MyList/MyList';

class NetflixMain extends Component{

    state = {
        mylistNames:{
            Mylist: 'My List',
            popular: 'Popular on Netflix',
            newReleases: 'New Releases',
            indian: 'Indian Movies'
        }
    }
    render(){
        let list = Object.keys(this.state.mylistNames)
        .map(igKey =>{
            return <MyList key = {igKey} type={this.state.mylistNames[igKey]} />
        })
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
                <MainInfo />
                {/* <MyList > My List</MyList> */}
                {/* <MyList >Popular on Netflix</MyList>
                <MyList >New Releases</MyList>
                <MyList >Indian Movies</MyList> */}
                {list}
            </div>

        );
    }
}

export default NetflixMain;