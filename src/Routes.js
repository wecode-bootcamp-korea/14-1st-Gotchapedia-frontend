import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Mytaste from './pages/Mypage/Mytaste/Mytaste';
import MovieDetail from './pages/MovieDetail/MovieDetail';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/mytaste" component={Mytaste} />
          <Route exact path="/movie-detail" component={MovieDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
