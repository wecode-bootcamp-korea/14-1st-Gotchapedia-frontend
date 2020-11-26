import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './main.scss';
import ThemeBox from './ThemeBox/ThemeBox';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movieListData: [],
    };
  }

  render() {
    const { movieListData } = this.state;
    console.log(movieListData)
    return (
      <>
        <Nav />
        <ThemeBox/>
        <Footer />
      </>
    );
  }
}

export default Main;
