import React, { Component } from 'react';
import MyList from '../../components/MyList/MyList';
import classes from './Movies.module.css'


class Movies extends Component{
    render(){
        return(
            <div className={classes.Movies}>
            <h1 style={{margin:'100px 0 0 0', textAlign:'center', color:'white'}}>Movies</h1>
            <MyList type='Latest movies'></MyList>
            </div>
            
        );
    }
}

export default Movies;