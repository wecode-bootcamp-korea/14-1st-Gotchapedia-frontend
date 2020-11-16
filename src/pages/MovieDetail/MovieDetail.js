import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';

class MovieDetail extends Component {
  render() {
    return (
      <>
        <Nav />
        <div>
          <MovieHeader />
          <MovieContent />
          <MovieSide />
        </div>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
