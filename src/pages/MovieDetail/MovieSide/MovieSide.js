import React, { Component } from 'react';
import GalleryBox from './GalleryBox/GalleryBox';
import MovieClip from '../MovieSide/MovieClip/MovieClip';
import './movieSide.scss';

class MovieSide extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    const { movieSideData } = this.props;
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${movieSideData.name}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      {
        method: 'GET',
        redirect: 'follow',
      }
    )
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result.items }))
      .catch((error) => console.log('error', error));
  }

  render() {
    const { videos } = this.state;
    const { movieSideData } = this.props;
    const subImage = movieSideData.subImage;
    
    return (
      <div className='MovieSide'>
        <div className='galleryWrapper'>
          <div className='galleryHeading'>갤러리</div>
          <GalleryBox subImage={subImage} />
        </div>
        <div className='border'></div>
        <div className='videoWrapper'>
          <div className='videoHeading'>동영상</div>
          <div className='videoBoxWrapper'>
            {videos && (
              <MovieClip videos={videos} movieTitle={movieSideData.name} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSide;
