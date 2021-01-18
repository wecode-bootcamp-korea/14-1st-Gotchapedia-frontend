import React, { Component } from 'react';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import MovieContent from 'pages/MovieDetail/MovieContent/MovieContent';
import MovieHeader from 'pages/MovieDetail/MovieHeader/MovieHeader';
import MovieSide from 'pages/MovieDetail/MovieSide/MovieSide';
import 'pages/MovieDetail/movieDetail.scss';
import { TOKEN } from 'config';

class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      isWantToSee: false,
      movieDetailData: {},
    };
  }

  goToOverview = () => {
    this.props.history.push(`/movies/${this.props.match.params.id}/detail`);
  };

  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_SERVER}movies/${this.props.match.params.id}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movieDetailData: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { movieDetailData } = this.state;
    console.log(movieDetailData);

    return (
      <div className='MovieDetailPage'>
        <div className='MovieHeaderWrapper'>
          <Nav />
          {!!movieDetailData.id && (
            <MovieHeader
              id={movieDetailData.id}
              movieHeaderData={movieDetailData}
            />
          )}
        </div>
        {!!movieDetailData.id && (
          <div className='MovieContentWrapper'>
            <MovieContent
              id={movieDetailData.id}
              movieContentData={movieDetailData}
              goToOverview={this.goToOverview}
            />
            <MovieSide
              id={movieDetailData.id}
              movieSideData={movieDetailData}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default MovieDetail;
