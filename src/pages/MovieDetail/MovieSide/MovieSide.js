import React, { Component } from 'react';
import GalleryBox from './GalleryBox/GalleryBox';
import './movieSide.scss';
import MovieClip from '../MovieSide/MovieClip/MovieClip';

class MovieSide extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }



  render() {
    const { videos } = this.state;
    return (
      <div className='MovieSide'>

      </div>
    );
  }
}

export default MovieSide;
