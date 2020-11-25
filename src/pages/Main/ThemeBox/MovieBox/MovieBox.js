import React, { Component } from 'react';
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
    this.props.history.push("/movie-detail/")
  }

  render() {
    const {moviedate, imageURL, movierate, title, rate } = this.props;
    return (
      <div className='MovieBox'>
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img className='moviePoster' onClick={this.goToMovieDetail} alt='poster' src={imageURL} />
            </div>
            {/* <div className='movieRank'>{movierank}</div> */}
            <div className='movieInfo'>
              <div className='movieTitle'>{title}</div>
              <div className='movieDate'>{rate}</div>
              <div className='movieRate'>
                <span>평점</span>
                <span className='iconStar'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>{rate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieBox;