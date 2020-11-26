import React, { Component } from 'react';
// import MovieBox from './MovieBox/MovieBox';
import MovieBox from './MovieBox/MovieBox';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './themeBox.scss';

class Arrow extends Component {
  render() {
    if (this.props.isLeft) {
      return <div className='leftNavArrow'> </div>;
    } else {
      return <div className='rightNavArrow'> </div>;
    }
  }
}

class ThemeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: [], idMovieList: {} };
  }
  componentDidMount() {
    console.log('Alpha alpha');
    var users = [
      '고수희님의 Pick',
      '고은정님의 Pick',
      '김병준님 Pick',
      '김태현님의의 Pick',
      '이영주님의 Pick',
      '장규석의 Pick',
    ];
    for (var i = 0; i < 6; i++) {
      console.log('Fetch called');
      this.fetcharow(users[i]);
    }
  }

  fetcharow = (rowId) => {
    fetch('/Data/movielist.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        var newIdMovieList = this.state.idMovieList;
        console.log('registering row id', rowId);
        newIdMovieList[rowId] = {
          name: rowId,
          favoritemovies: res.data,
        };
        this.setState({ idMovieList: newIdMovieList });
        var list = [];
        for (var key in newIdMovieList) {
          console.log('pushing', newIdMovieList[key]);
          list.push(newIdMovieList[key]);
        }

        this.setState({
          movieList: list,
        });
      });
  };

  render() {
    const { movieListData } = this.props;

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
                            console.log('moviewbox', movieboxData);
                            return (
                              <MovieBox
                                date={movieboxData.moviedate}
                                imageURL={movieboxData.movieimg}
                                rate={movieboxData.movierate}
                                title={movieboxData.movietitle}
                                movieId={movieboxData.rank}
                              />
                            );
                          }
                        )}
                        arrowLeft={<Arrow isLeft={true} />}
                        arrowRight={<Arrow isLeft={false} />}
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
