import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieBox from './ThemeBox/MovieBox/MovieBox';
import Nav from '../../components/Nav/Nav';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import {
  MAINPAGE_API1,
  MAINPAGE_API2,
  MAINPAGE_API3,
  MAINPAGE_API4,
  MAINPAGE_API5,
  MAINPAGE_API6,
  MYPAGE_TOKEN,
} from '../../config';
import './main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movieData1: [],
      movieData2: [],
      movieData3: [],
      movieData4: [],
      movieData5: [],
      movieData6: [],
    };
  }

  componentDidMount() {
    this.loadMainData1();
    this.loadMainData2();
    this.loadMainData3();
    this.loadMainData4();
    this.loadMainData5();
    this.loadMainData6();
  }

  loadMainData1 = () => {
    fetch(MAINPAGE_API1, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData1: res.data }))
      .catch((error) => console.log('error', error));
  };
  loadMainData2 = () => {
    fetch(MAINPAGE_API2, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData2: res.data }))
      .catch((error) => console.log('error', error));
  };
  loadMainData3 = () => {
    fetch(MAINPAGE_API3, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData3: res.data }))
      .catch((error) => console.log('error', error));
  };
  loadMainData4 = () => {
    fetch(MAINPAGE_API4, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData4: res.data }))
      .catch((error) => console.log('error', error));
  };
  loadMainData5 = () => {
    fetch(MAINPAGE_API5, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData5: res.data }))
      .catch((error) => console.log('error', error));
  };
  loadMainData6 = () => {
    fetch(MAINPAGE_API6, {
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ movieData6: res.data }))
      .catch((error) => console.log('error', error));
  };

  render() {
    const settings = {
      className: 'slick',
      centerMode: true,
      infinite: true,
      centerPadding: '10px',
      arrows: true,
      slidesToShow: 6,
      speed: 500,
      pauseOnHover: true,
      rows: 1,
      slidesPerRow: 1,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const {
      movieData1,
      movieData2,
      movieData3,
      movieData4,
      movieData5,
      movieData6,
    } = this.state;

    return (
      <>
        <Nav />
        <div className='Main'>
          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  <span className='pinkText'>은정님</span>의 인생작 컬렉션
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData2.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>

          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  <span className='pinkText'>수희님</span>의 인생 박스오피스
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData1.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>

          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  선호하는 감독 <span className='pinkText'>김병준</span>의 작품
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData3.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>

          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  선호하는 배우 <span className='pinkText'>김태현</span>의 작품
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData4.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>

          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  선호하는 배우 <span className='pinkText'>이영주</span>의 인생
                  작품
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData5.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>

          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>
                  <span className='pinkText'>규석님</span>의 영화 순위
                </span>
              </div>
            </div>
            <div className='movieList'>
              {movieData6.map((movie) => (
                <MovieBox
                  key={movie.movieId}
                  date={movie.date}
                  imageURL={movie.imageURL}
                  rate={movie.rate}
                  title={movie.title}
                  movieId={movie.movieId}
                />
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default withRouter(Main);
