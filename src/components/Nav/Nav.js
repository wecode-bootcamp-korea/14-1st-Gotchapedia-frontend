import React, { Component } from "react";
import "./nav.scss";
import Search from "./Search/Search";
import Signup from "./Signup/Signup";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        Nav
        <Search />
        <Signup />
      </div>
    );
  }
}

export default Nav;
