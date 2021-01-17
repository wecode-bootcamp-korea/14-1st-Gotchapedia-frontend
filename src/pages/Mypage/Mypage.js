import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MYPAGE_API, TOKEN, WANNAWATCH_API, WATCHING_API } from 'config';
import 'pages/Mypage/mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      myData: {},
      wannaWatchData: {},
      watchingData: {},
      isListOpen: false,
    };
  }

  componentDidMount() {
    this.loadMyData();
    this.loadWannaWatchData();
    this.loadWatchingData();
  }

  loadMyData = () => {
    fetch(MYPAGE_API, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ myData: res }))
      .catch(error => console.log('error', error));
  };

  loadWannaWatchData = () => {
    fetch(WANNAWATCH_API, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ wannaWatchData: res }))
      .catch(error => console.log('error', error));
  };

  loadWatchingData = () => {
    fetch(WATCHING_API, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ watchingData: res }))
      .catch(error => console.log('error', error));
  };

  render() {
    const { myData, wannaWatchData, watchingData } = this.state;

    return (
      <>
        {myData.data && wannaWatchData.data && watchingData.data && (
          <>
            <Nav />
            <div className='MyPage'>
              <div className='header'>
                <FontAwesomeIcon className='headerArrow' icon={faArrowLeft} />
                <div className='myTasteBtn'>
                  <Link to='/mypage-mytaste'>취향분석</Link>
                </div>
              </div>
              <section className='evaluationSection'>
                <div className='sectionHeader'>
                  <div className='headerLeft'>
                    <span>평가</span>
                    <span className='sectionCount'>{myData.data.length}</span>
                  </div>
                  <div className='headerRight'>더보기</div>
                </div>

                <div className='movieList'>
                  {myData.data.map(movie => (
                    <div key={movie.movieId} className='movieBox'>
                      <div className='posterWrapper'>
                        <img
                          src={movie.imageURL}
                          alt='poster'
                          className='poster'
                          onClick={() => {
                            this.props.history.push(`/movies/${movie.movieId}`);
                          }}
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
                      {wannaWatchData.data.length}
                    </span>
                  </div>
                  <div className='headerRight'>더보기</div>
                </div>

                <div className='movieList'>
                  {wannaWatchData.data.map(movie => (
                    <div key={movie.movieId} className='movieBox'>
                      <div className='posterWrapper'>
                        <img
                          src={movie.imageURL}
                          alt='poster'
                          className='poster'
                          onClick={() => {
                            this.props.history.push(`/movies/${movie.movieId}`);
                          }}
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
                      {watchingData.data.length}
                    </span>
                  </div>
                  <div className='headerRight'>더보기</div>
                </div>

                <div className='movieList'>
                  {watchingData.data.map(movie => (
                    <div key={movie.movieId} className='movieBox'>
                      <div className='posterWrapper'>
                        <img
                          src={movie.imageURL}
                          alt='poster'
                          className='poster'
                          onClick={() => {
                            this.props.history.push(`/movies/${movie.movieId}`);
                          }}
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
        )}
      </>
    );
  }
}

export default Mypage;
