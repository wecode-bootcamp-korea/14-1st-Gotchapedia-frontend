import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';
import { MOVIEDETAIL_TOKEN } from '../../config';
class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      isWantToSee: false,
      movieDetailData: {},
    };
  }
  goToOverview = () => {
    this.props.history.push(`/movies/${this.props.id}/detail`);
  };
  // 동적 라우팅
  componentDidMount() {
    fetch(`http://3.35.216.109:8000/movies/${this.props.match.params.id}`, {
      headers: {
        Authorization: MOVIEDETAIL_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movieDetailData: res.data });
      });
  }
  // componentDidMount() {
  //   fetch('http://3.35.216.109:8000/movies/22/detail', {
  //       headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ movieDetailData: res.data });
  //     })
  // }
  render() {
    const { movieDetailData } = this.state;
    console.log(movieDetailData);
    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          {!!movieDetailData.id && (
            <MovieHeader
              id={movieDetailData.id}
              movieHeaderData={movieDetailData}
            />
          )}
        </div>
        {!!movieDetailData.id && (
          <div className='MovieContentWrapper'>
            <MovieContent
              id={movieDetailData.id}
              movieContentData={movieDetailData}
              goToOverview={this.goToOverview}
            />
            <MovieSide
              id={movieDetailData.id}
              movieSideData={movieDetailData}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default MovieDetail;
