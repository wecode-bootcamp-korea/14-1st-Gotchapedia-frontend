import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './main.scss';
import ThemeBox from './ThemeBox/ThemeBox';

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <ThemeBox />
        <Footer />
      </>
    );
  }
}

export default Main;
