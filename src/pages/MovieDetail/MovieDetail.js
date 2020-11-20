import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';

class MovieDetail extends Component {
  render() {
    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          <MovieHeader />
        </div>
        <div className='MovieContentWrapper'>
          <MovieContent />
          <MovieSide />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MovieDetail;
