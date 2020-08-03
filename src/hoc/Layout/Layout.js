import React from 'react';
import Toolbar from '../../components/ToolBar/toolbar'
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';

const Layout = (props) =>{
    return(
        <Aux>
            <div>
            <Toolbar />
        </div>

        <main className={classes.Space}>
            {props.children}
        </main>
        </Aux>

        
    );
}

export default Layout;