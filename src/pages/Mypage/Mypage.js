import { Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MYPAGE_API, MYPAGE_TOKEN } from '../../config';
import './mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      myData: {},
    };
  }

  componentDidMount() {
    fetch(MYPAGE_API, {
      method: 'GET',
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ myData: res }))
      .catch((error) => console.log('error', error));
  }

  render() {
    const { myData } = this.state;
    const movieData = myData.data;

    return (
      <>
        <Nav myData={myData && myData} />
        <div className='MyPage'>
          <div className='header'>
            <FontAwesomeIcon className='headerArrow' icon={faArrowLeft} />
            <div className='myTasteBtn'><Link to="/mypage-mytaste">취향분석</Link></div>
          </div>
          <section className='evaluationSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>평가</span>
                <span className='sectionCount'>
                  {movieData && movieData.length}
                </span>
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
                    <div className='movieScore'>평가함 ★ {movie.rate}</div>
                  </div>
                ))}
            </div>
          </section>
          <section className='wannaWatchSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>보고싶어요</span>
                <span className='sectionCount'>
                  {movieData && movieData.length}
                </span>
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
                    <div className='movieScore'>평가함 ★ {movie.rate}</div>
                  </div>
                ))}
            </div>
          </section>
          <section className='watchingSection'>
            <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>보는중</span>
                <span className='sectionCount'>
                  {movieData && movieData.length}
                </span>
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
                    <div className='movieScore'>평가함 ★ {movie.rate}</div>
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
