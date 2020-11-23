import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';


// const MOVIEDETAIL_API = 'http://localhost:3000/data/contentdata.json'
const MOVIEDETAIL_API = 'http://10.58.2.189:8000/movie/23';
// const MOVIEDETAIL_API = "http://192.168.0.16:8000/movie/23"
const MOVIEDETAIL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      isWantToSee: false,
      movieDetailData: {},
    }
  }

  componentDidMount() {
    fetch(MOVIEDETAIL_API, {
      method: 'GET',
      headers: {
        Authorization: MOVIEDETAIL_TOKEN,
      },
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        movieDetailData: res.data,
      })
    })
    .catch((err) => console.log('err >>>>> ', err));
  }

  // componentDidMount() {
  //   fetch(MOVIEDETAIL_API, {
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       movieDetailData: res.data,
  //     })
  //   })
  //   .catch((err) => console.log('err >>>>> ', err));
  // }


  render() {
    const { movieDetailData } = this.state;

    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          {!!movieDetailData.id && <MovieHeader movieHeaderData={movieDetailData} />}
        </div>
        {!!movieDetailData.id && <div className='MovieContentWrapper'>
          <MovieContent movieContentData={movieDetailData} />
          <MovieSide movieSideData={movieDetailData} />
        </div>}
        <Footer />
      </div>
    );
  }
}

export default MovieDetail;
