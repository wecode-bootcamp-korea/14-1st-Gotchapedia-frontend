import React, { Component } from 'react';
import './movieBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class MovieBox extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }
//just in case
  // componentDidMount() {
  //   fetch('http://10.58.0.152:8000/movie/main', {
  //     method: 'POST',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         name: '김병준',
  //         movieList: res.data,
  //       });
  //     });
  // }

  render() {
    // console.log(this.state.movieList);

    const { moviedate, movieimg, movierate, movietitle } = this.props;
    return (
      <div className='MovieBox'>
        <div className='movieAllWrap'>
          <div className='moviePosterInside'>
            <div className='moviePosterWrap'>
              <img className='moviePoster' alt='poster' src={movieimg} />
            </div>
            <div className='movieRank'></div>
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
