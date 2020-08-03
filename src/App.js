import React from 'react';
// import logo from './logo.svg';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NetflixMain from './containers/NetflixMain/NetflixMain';
import Layout from './hoc/Layout/Layout';

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={NetflixMain} />
      <Redirect to='/' />
    </Switch>
  )
  return (
    
    <div>
      <Layout>
        {routes}
        
      </Layout>
    </div>
  );
}

export default withRouter(App);
