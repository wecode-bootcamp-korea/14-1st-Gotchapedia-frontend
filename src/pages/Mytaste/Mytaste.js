import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './mytaste.scss';

class Mytaste extends Component {
  render() {
    return (
      <>
        <Nav />
        <div>My taste</div>
        <Footer />
      </>
    );
  }
}

export default Mytaste;
