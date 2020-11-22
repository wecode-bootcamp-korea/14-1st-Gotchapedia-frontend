import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';


const MOVIEDETAIL_API = 'http://localhost:3000/data/contentdata.json'
// const MOVIEDETAIL_API = "백엔드 주소"

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      isWantToSee: false,
      movieDetailData: [],
    }
  }

  componentDidMount() {
    this.loadMovieDetailData()
  }

  loadMovieDetailData = () => {
    fetch(MOVIEDETAIL_API, {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        movieDetailData: res.data,
      })
    })
  }



  render() {
    const { movieDetailData } = this.state;
    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          <MovieHeader movieHeaderData={movieDetailData && movieDetailData} />
        </div>
        <div className='MovieContentWrapper'>
          <MovieContent movieContentData={movieDetailData && movieDetailData} />
          <MovieSide movieSideData={movieDetailData && movieDetailData} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MovieDetail;
