import React from 'react';
// import logo from './logo.svg';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NetflixMain from './containers/NetflixMain/NetflixMain';
import Layout from './hoc/Layout/Layout';
import TvShows from './containers/TvShows/TvShows';
import Movies from './containers/Movies/Movies';
import GiftPage from './components/GiftPage/GiftPage';
function App() {

  let routes = (
    <Switch>
      <Route path='/tvshows' exact component={TvShows} />
      <Route path='/movies' exact component={Movies} />
      <Route path='/' exact component={NetflixMain} />
      <Route path='/referfriends' exact component={GiftPage} />
      
      <Redirect to='/' />
    </Switch>
  );
  
  return (
    
    <div>
      <Layout>
        {routes}
        
      </Layout>
    </div>
  );
}

export default withRouter(App);
