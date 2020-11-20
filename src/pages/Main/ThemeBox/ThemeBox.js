import React, { Component } from 'react';
// import MovieBox from './MovieBox/MovieBox';
import MovieBox from './MovieBox/MovieBox';
import './themeBox.scss';

class ThemeBox extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/movielist.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movieList: res.data,
        });
      });
  }

  render() {
    console.log(this.state.movieList);
    return (
      <>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='onesPickHeadCover'>
              <p className='onesPickHead'>Davey's pick!</p>
              <div className='boxRankingCover'>
                <div
                  className='boxRankingWrap'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div className='blankLeft' direction='left'></div>
                  {this.state.movieList.map((movieboxData) => {
                    return (
                      <MovieBox
                        moviedate={movieboxData.moviedate}
                        movieimg={movieboxData.movieimg}
                        movierate={movieboxData.movierate}
                        movietitle={movieboxData.movietitle}
                      />
                    );
                  })}
                  {/* <div className='blankLeft' direction='left'></div> */}
                  <div className='blankRight' direction='right'></div>
                </div>
                <div className='leftArrow' direction='left'>
                  <div className='leftArrowBody'>
                    {/* <img className='leftArrowImg' alt='arrow' src='/images/totheleft'/> */}
                  </div>
                </div>
                <div className='rightArrow' direction='right'>
                  <div className='rightArrowBody'>
                    {/* <img className='rightArrowImg' alt='arrow' src='/images/totheright'/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* 두번째 Themebox */}
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <p className='onesPickHead'>Sooyeol's pick!</p>
              <div className='boxRankingCover'>
                <div
                  className='boxRankingWrap'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div className='blankLeft' direction='left'></div>
                  {this.state.movieList.map((movieboxData) => {
                    return (
                      <MovieBox
                        moviedate={movieboxData.moviedate}
                        movieimg={movieboxData.movieimg}
                        movierate={movieboxData.movierate}
                        movietitle={movieboxData.movietitle}
                      />
                    );
                  })}
                  {/* <div className='blankLeft' direction='left'></div> */}
                  <div className='blankRight' direction='right'></div>
                </div>
                <div className='leftArrow' direction='left'>
                  <div className='leftArrowBody'>
                    {/* <img className='leftArrowImg' alt='arrow' src='/images/totheleft'/> */}
                  </div>
                </div>
                <div className='rightArrow' direction='right'>
                  <div className='rightArrowBody'>
                    {/* <img className='rightArrowImg' alt='arrow' src='/images/totheright'/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                
          {/* 세번째 Themebox */}
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <p className='onesPickHead'>bonnie's pick!</p>
              <div className='boxRankingCover'>
                <div
                  className='boxRankingWrap'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div className='blankLeft' direction='left'></div>
                  {this.state.movieList.map((movieboxData) => {
                    return (
                      <MovieBox
                        moviedate={movieboxData.moviedate}
                        movieimg={movieboxData.movieimg}
                        movierate={movieboxData.movierate}
                        movietitle={movieboxData.movietitle}
                      />
                    );
                  })}
                  {/* <div className='blankLeft' direction='left'></div> */}
                  <div className='blankRight' direction='right'></div>
                </div>
                <div className='leftArrow' direction='left'>
                  <div className='leftArrowBody'>
                    {/* <img className='leftArrowImg' alt='arrow' src='/images/totheleft'/> */}
                  </div>
                </div>
                <div className='rightArrow' direction='right'>
                  <div className='rightArrowBody'>
                    {/* <img className='rightArrowImg' alt='arrow' src='/images/totheright'/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ThemeBox;
