import React, { Component } from 'react';
// import MovieBox from './MovieBox/MovieBox';
import MovieBox from './MovieBox/MovieBox';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './themeBox.scss';

class Arrow extends Component {
  render() {
    return <div> {this.props.arrowText}</div>;
  }
}

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

    // List is supposed to come back from our server. So this is not needed
    var list = [];
    for (var i = 0; i < 100; i++) {
      var name = 'Movie No.' + i;
      list.push({ index: i, name: name });
    }

    return (
      <>
        {this.state.movieList.map((oneHorizontalLayoutDataPayload) => {
          return (
            <div className='onesPick'>
              <div className='onesPickHeadWrap'>
                <div className='fakeCover'>
                  <div className='onesPickHeadCover'>
                    <p className='onesPickHead'>
                      {oneHorizontalLayoutDataPayload.name}
                    </p>
                    <div className='boxRankingCover'>
                      <ScrollMenu
                        data={oneHorizontalLayoutDataPayload.favoritemovies.map(
                          (movieboxData) => {
                            return (
                              <MovieBox
                                moviedate={movieboxData.moviedate}
                                movieimg={movieboxData.movieimg}
                                movierate={movieboxData.movierate}
                                movietitle={movieboxData.movietitle}
                                movieRank={movieboxData.rank}
                              />
                            );
                          }
                        )}
                        arrowLeft={<Arrow arrowText='<' />}
                        arrowRight={<Arrow arrowText='>' />}
                        scrollBy={5}
                        wheel={false}
                      />
                      <div className='leftArrow' direction='left'>
                        <div className='leftArrowBody'></div>
                      </div>
                      <div className='rightArrow' direction='right'>
                        <div className='rightArrowBody'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default ThemeBox;
