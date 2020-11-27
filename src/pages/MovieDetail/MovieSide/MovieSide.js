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

  componentDidMount() {
    const {movieSideData} = this.props;


  render() {
    const { videos } = this.state;
    const { movieSideData } = this.props;
    const subImage = movieSideData.subImage;
    console.log(this.props.movieSideData);
    return (
      <div className='MovieSide'>

      </div>
    );
  }
}

export default MovieSide;
