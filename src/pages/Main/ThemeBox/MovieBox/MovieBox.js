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
    this.props.history.push("/movie-detail");
  }

  render() {
    const {moviedate, movieimg, movierate, movietitle, movierank } = this.props;
    return (
      <div className='MovieBox'>
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img className='moviePoster' onClick={this.goToMovieDetail} alt='poster' src={movieimg} />
            </div>
            <div className='movieRank'>{movierank}</div>
            <div className='movieInfo'>
              <div className='movieTitle'>{movietitle}</div>
              <div className='movieDate'>{moviedate}</div>
              <div className='movieRate'>
                <span>평점</span>
                <span className='iconStar'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>{movierate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieBox);
