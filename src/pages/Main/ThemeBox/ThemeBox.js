import React, { Component } from 'react';
// import MovieBox from './MovieBox/MovieBox';
import MovieBox from './MovieBox/MovieBox';
// import ScrollMenu from 'react-horizontal-scrolling-menu';
import './themeBox.scss';
class ThemeBox extends Component {

  render() {
    const { movieListData } = this.props;

    return (
      <>
          <div className='onesPick'>
            <div className='onesPickHeadWrap'>
              <div className='fakeCover'>
                <div className='onesPickHeadCover'>
                  <p className='onesPickHead'>{movieListData.movieId}<span>'s Pick !</span></p>
                  <div className='boxRankingCover'>
                    <div
                      className='boxRankingWrap'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='blankLeft' direction='left'></div>
                      {movieListData.map((movieList) => {
                        return (
                        <MovieBox 
                          movieId={movieList.movieId}
                          date={movieList.date}
                          imageURL={movieList.imageURL}
                          rate={movieList.rate}
                          title={movieList.title}
                        />
                        )
                      })}
                      <div className='blankRight' direction='right'></div>
                    </div>
                    <div className='leftArrow' direction='left'>
                      <div className='leftArrowBody'>
                      </div>
                      <div className='rightArrow' direction='right'>
                        <div className='rightArrowBody'></div>
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