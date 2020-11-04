import React from 'react';
// import logo from './logo.svg';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NetflixMain from './containers/NetflixMain/NetflixMain';
import Layout from './hoc/Layout/Layout';
import TvShows from './containers/TvShows/TvShows';
import Movies from './containers/Movies/Movies';
import GiftPage from './components/GiftPage/GiftPage';
import Auth from './containers/Auth/Auth';
import Login from './components/Signin/Signin';
import PlayContent from './components/MainInfo/Playcontent';
function App() {

  let routes = (
    <Switch>
      <Route path='/tvshows' exact component={TvShows} />
      <Route path='/movies' exact component={Movies} />
      <Route path='/' exact component={NetflixMain} />
      <Route path='/referfriends' exact component={GiftPage} />
      <Route path='/auth' exact component= {Auth} />
      <Route path="/auth/login" exact component={Login} />
      <Route path="/auth/signup" exact component={Auth} />
      <Route path="/playcontent" exact component={PlayContent} />
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
