import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
// import MovieClip from '../MovieDetail/MovieSide/MovieClip/MovieClip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './mypage.scss';
import { isCompositeComponent } from 'react-dom/test-utils';

const MYPAGE_API = 'http://localhost:3000/data/myPage.json';
const MYPAGE_TOKEN = '';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      myData: {},
    };
  }

  componentDidMount() {
    this.loadMypageData();
  }

  loadMypageData = () => {
    fetch(MYPAGE_API, {
      method: 'GET',
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ myData: res }))
      .catch((error) => console.log('error', error));
  };

  render() {
    const { myData } = this.state;
    const movieData = myData.data;
    return (
      <>
        <Nav />
        <div className='MyPage'>
          <div className='header'>
            <FontAwesomeIcon className='headerArrow' icon={faArrowLeft} />
          </div>
          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>평가</span>
                <span className='sectionCount'>918</span>
              </div>
              <div className='headerRight'>더보기</div>
            </div>

            <div className='movieList'>
              {movieData &&
                movieData.map((movie) => (
                  <div key={movie.movieId} className='movieBox'>
                    <div className='posterWrapper'>
                      <img
                        src={movie.imageURL}
                        alt='poster'
                        className='poster'
                      />
                    </div>
                    <div className='movieTitle'>{movie.title}</div>
                    <div className='movieScore'>평가함 ★ {movie.rate}}</div>
                  </div>
                ))}
            </div>
          </section>
          <section className='wannaWatchSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>보고싶어요</span>
                <span className='sectionCount'>918</span>
              </div>
              <div className='headerRight'>더보기</div>
            </div>

            <div className='movieList'>
              {movieData &&
                movieData.map((movie) => (
                  <div key={movie.movieId} className='movieBox'>
                    <div className='posterWrapper'>
                      <img
                        src={movie.imageURL}
                        alt='poster'
                        className='poster'
                      />
                    </div>
                    <div className='movieTitle'>{movie.title}</div>
                    <div className='movieScore'>평가함 ★ {movie.rate}}</div>
                  </div>
                ))}
            </div>
          </section>
          <section className='watchingSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>보는중</span>
                <span className='sectionCount'>918</span>
              </div>
              <div className='headerRight'>더보기</div>
            </div>

            <div className='movieList'>
              {movieData &&
                movieData.map((movie) => (
                  <div key={movie.movieId} className='movieBox'>
                    <div className='posterWrapper'>
                      <img
                        src={movie.imageURL}
                        alt='poster'
                        className='poster'
                      />
                    </div>
                    <div className='movieTitle'>{movie.title}</div>
                    <div className='movieScore'>평가함 ★ {movie.rate}}</div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Mypage;
