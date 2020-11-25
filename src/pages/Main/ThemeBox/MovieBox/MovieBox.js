import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './movieBox.scss';

class MovieBox extends Component {
  constructor() {
    super();
    this.state = {
      temporarymovielist: [],
    };
  }

  render() {
    const {moviedate, movieimg, movierate, movietitle, rank } = this.props;
    return (
      <div className='MovieBox'>
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img className='moviePoster' alt='poster' src={movieimg} />
            </div>
            <div className='movieRank'>{rank}</div>
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

export default MovieBox;
