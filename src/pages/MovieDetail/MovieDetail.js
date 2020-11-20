import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      isWantToSee: false,
      contentsData: [],
    }
  }

  componentDidMount() {
    fetch("/Data/contentdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        contentsData: res.data,
      })
    })
  }

  render() {
    const { contentsData } = this.state;
    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          <MovieHeader contentsData={contentsData && contentsData}/>
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
