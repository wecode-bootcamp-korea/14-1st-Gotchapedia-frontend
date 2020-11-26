import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './movieBox.scss';
class MovieBox extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  goToMovieDetail = () => {
    this.props.history.push(`/movies/${this.props.movieId}`);
  };

  render() {
    const { imageURL, title, date, rate, movieId } = this.props;
    return (
      <div className='MovieBox' key={movieId}>
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img
                className='moviePoster'
                onClick={this.goToMovieDetail}
                alt='poster'
                src={imageURL}
              />
            </div>
            <div className='movieInfo'>
              <div className='movieTitle'>{title}</div>
              <div className='movieDate'>{date}</div>
              <div className='movieRate'>
                <span className='movieScore'>평점</span>
                <span className='iconStar'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className='movieScore'>{rate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MovieBox);
