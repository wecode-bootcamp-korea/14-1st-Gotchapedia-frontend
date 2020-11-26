import React, { Component } from 'react';
import './galleryBox.scss';

class GalleryBox extends Component {
  render() {
    const { subImage } = this.props;

    return (
      <div className='GalleryBox'>
        {subImage.map((image) => {
          return (
            <div className='galleryPictureWrapper' key={image.id}>
              <img
                className='galleryPicture'
                src={image.url}
                alt='갤러리이미지'></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GalleryBox;
