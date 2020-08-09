import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props =>{
    return(
        <div className={classes.SearchBar}>
            <input type='text' name='search' placeholder='search..'></input>
        </div>
     
    ) ;
}

export default SearchBar