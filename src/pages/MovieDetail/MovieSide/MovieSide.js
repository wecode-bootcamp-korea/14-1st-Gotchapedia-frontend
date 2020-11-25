import React, { Component } from 'react';

import GalleryBox from './GalleryBox/GalleryBox';
import VideoBox from './VideoBox/VideoBox';
import './movieSide.scss';
import MovieClip from '../MovieSide/MovieClip/MovieClip';

class MovieSide extends Component { 

  render() {

    const { movieSideData } = this.props;
    const subImage = movieSideData.subImage;

    return (
      <div className='MovieSide'>
        <div className='galleryWrapper'>
          <div className='galleryHeading'>갤러리</div>
          <GalleryBox subImage={subImage}/>
        </div>
        <div className='border'></div>
        <div className='videoWrapper'>
          <div className='videoHeading'>동영상</div>
          <div className='videoBoxWrapper'>
            <MovieClip/>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieSide;
