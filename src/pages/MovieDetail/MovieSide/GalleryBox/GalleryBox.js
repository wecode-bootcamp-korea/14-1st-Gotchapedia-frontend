import React, { Component } from 'react';
import './galleryBox.scss';

class GalleryBox extends Component {

  render() {
    const { pictureVideoData } = this.props;
    
    return (
      <div className='GalleryBox'>
        <img clasName='galleryPicture' src={pictureVideoData.image} alt='갤러리이미지'></img>
      </div>
    )
  }
}

export default GalleryBox;