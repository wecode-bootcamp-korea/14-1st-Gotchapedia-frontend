import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
// import MovieClip from '../MovieDetail/MovieSide/MovieClip/MovieClip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './mypage.scss';

class Mypage extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className='MyPage'>
          <div className='header'>
            <FontAwesomeIcon className='headerArrow' icon={faArrowLeft} />
            <div className='headerName'>
              {/* <span>영화</span> */}
            </div>
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
              <div className='movieBox'>
                <div className='posterWrapper'>
                  <img
                    src='/images/vanilaSkyPoster.jpeg'
                    alt='poster'
                    className='poster'
                  />
                </div>
                <div className='movieTitle'>바닐라 스카이</div>
                <div className='movieScore'>평가함 ★ 5.0</div>
              </div>
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
              <div className='movieBox'>
                <div className='posterWrapper'>
                  <img
                    src='/images/vanilaSkyPoster.jpeg'
                    alt='poster'
                    className='poster'
                  />
                </div>
                <div className='movieTitle'>바닐라 스카이</div>
                <div className='movieScore'>평가함 ★ 5.0</div>
              </div>
            </div>
          </section>
          <section className='watchingSection'>
          <div className='sectionHeader'>
              <div className='headerLeft'>
                <span>평가</span>
                <span className='sectionCount'>918</span>
              </div>
              <div className='headerRight'>더보기</div>
            </div>

            <div className='movieList'>
              <div className='movieBox'>
                <div className='posterWrapper'>
                  <img
                    src='/images/vanilaSkyPoster.jpeg'
                    alt='poster'
                    className='poster'
                  />
                </div>
                <div className='movieTitle'>바닐라 스카이</div>
                <div className='movieScore'>평가함 ★ 5.0</div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Mypage;
