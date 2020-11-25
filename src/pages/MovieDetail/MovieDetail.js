import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MovieContent from './MovieContent/MovieContent';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieSide from './MovieSide/MovieSide';
import './movieDetail.scss';
import { MOVIEDETAIL_MOCKUP_API, MOVIEDETAIL_SERVER_API, MOVIEDETAIL_TOKEN } from '../../config';   

// 서버
// MOVIEDETAIL_SERVER_API, MOVIEDETAIL_TOKEN
// 목업
// MOVIEDETAIL_MOCKUP_API

class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      isWantToSee: false,
      movieDetailData: {},
    }
  }

  // 서버용
  // componentDidMount() {
  //   fetch(MOVIEDETAIL_SERVER_API, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({ movieDetailData: res.data });
  //   })
  //   .catch((err) => console.log('err >>>>> ', err));
  // }

  // 목업용
  componentDidMount() {
    fetch(MOVIEDETAIL_MOCKUP_API, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        movieDetailData: res.data[0],
      })
    })
    .catch((err) => console.log('err >>>>> ', err));
  }

  render() {
    const { movieDetailData } = this.state;
    console.log('url 뒤에 숫자 >>>>>>>>> ', this.props.match.params.id);

    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          {!!movieDetailData.id && <MovieHeader movieHeaderData={movieDetailData} />}
        </div>
        {
          !!movieDetailData.id && 
          <div className='MovieContentWrapper'>
            <MovieContent movieContentData={movieDetailData} />
            <MovieSide movieSideData={movieDetailData}/>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default MovieDetail;
