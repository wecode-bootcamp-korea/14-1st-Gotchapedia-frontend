import React, { Component } from 'react';
import './movieBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class MovieBox extends Component {
  render() {
    const { moviedata } = this.props;
    console.log(moviedata);
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
            <img
              className='movieRanking'
              alt='ranking'
              src='/images/testnumber.jpg'
            />
            <div className='movieInfo'>
              <div className='movieTitle'>{moviedata.movietitle}</div>
              <div className='movieDate'>2020 ・ 미국</div>
              <div className='movieRate'>
                <span>평점</span>
                <span className='iconStar'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>4.8</span>
              </div>
              <div className='movieRatio'>예매율 18% ・ 누적관객 203명</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBox;
