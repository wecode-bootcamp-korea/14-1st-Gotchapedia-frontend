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
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>고수희님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>고은정님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>김병준님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>김태현님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>이영주님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='onesPick'>
          <div className='onesPickHeadWrap'>
            <div className='fakeCover'>
              <div className='onesPickHeadCover'>
                <p className='onesPickHead'>장규석님의 Pick!</p>
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
                    <div className='blankRight' direction='right'></div>
                  </div>
                  <div className='leftArrow' direction='left'>
                    <div className='leftArrowBody'>
                    </div>
                  </div>
                  <div className='rightArrow' direction='right'>
                    <div className='rightArrowBody'>
                    </div>
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
