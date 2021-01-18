import React, { Component } from 'react';
import MovieBox from './MovieBox/MovieBox';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './themeBox.scss';

class ThemeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: [], idMovieList: {} };
  }
  componentDidMount() {
    this.fetcharow();
  }

  fetcharow = () => {
    fetch('http://localhost:3000/data//movielist.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        const { idMovieList } = this.state;
        let newIdMovieList = { ...idMovieList };
        const users = [
          '고수희님의 Pick',
          '고은정님의 Pick',
          '김병준님 Pick',
          '김태현님의의 Pick',
          '이영주님의 Pick',
          '장규석의 Pick',
        ];
        for (let i = 0; i < 6; i++) {
          newIdMovieList[users[i]] = {
            name: users[i],
            favoritemovies: res.data,
          };
        }

        this.setState({ idMovieList: newIdMovieList });
        let list = [];
        for (let key in newIdMovieList) {
          list.push(newIdMovieList[key]);
        }

        this.setState({
          movieList: list,
        });
      });
  };

  render() {
    return (
      <>
        {this.state.movieList.map(oneHorizontalLayoutDataPayload => {
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
                          movieboxData => {
                            return (
                              <MovieBox
                                date={movieboxData.moviedate}
                                imageURL={movieboxData.movieimg}
                                rate={movieboxData.movierate}
                                title={movieboxData.movietitle}
                                movieId={movieboxData.movieId}
                              />
                            );
                          }
                        )}
                        arrowLeft={<div className='leftNavArrow' />}
                        arrowRight={<div className='rightNavArrow' />}
                        scrollBy={5}
                        wheel={false}
                      />
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
