import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main/Main';
import Mypage from 'pages/Mypage/Mypage';
import Mytaste from 'pages/Mypage/Mytaste/Mytaste';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import CommentDetail from 'pages/MovieDetail/MovieContent/CommentBox/CommnetDetail/CommentDetail';
import Overview from 'pages/MovieDetail/MovieContent/Overview/Overview';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/mypage' component={Mypage} />
          <Route exact path='/mypage-mytaste' component={Mytaste} />
          <Route exact path='/movies/:id' component={MovieDetail} />
          <Route exact path='/movies/:id/comments' component={CommentDetail} />
          <Route exact path='/movies/:id/detail' component={Overview} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
