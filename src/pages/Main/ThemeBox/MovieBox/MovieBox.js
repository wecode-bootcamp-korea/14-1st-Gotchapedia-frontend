import React, { Component } from 'react';
import './movieBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class MovieBox extends Component {
  render() {
    // const { movieData } = this.props;

    return (
      <div className='MovieBox'>
        Movie
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img
                className='moviePoster'
                alt='poster'
                src='/images/hangover.jpg'
              />
            </div>
            <div className='movieRank'></div>
            <div className='movieInfo'>
              <div className='movieTitle'>숙취</div>
              <div className='movieDate'>2020 ・ 미국</div>
              <div className='movieRate'>
                <span>평점</span>
                <span className='iconStar'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBox;
