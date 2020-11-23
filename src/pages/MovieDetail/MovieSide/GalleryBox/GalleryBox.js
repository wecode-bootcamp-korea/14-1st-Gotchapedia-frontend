import React, { Component } from 'react';
import './galleryBox.scss';

class GalleryBox extends Component {

  render() {
    // const { pictureVideoData, key } = this.props;
    
    // console.log(pictureVideoData);

    return (
      <div className='GalleryBox'>
        {/* <img clasName='galleryPicture' src={pictureVideoData.subImage[key].url} alt='갤러리이미지'></img> */}
        <img src='/images/url2.png'></img>
        <img src='/images/ur3.png '></img>
      </div>
    )
  }
}

export default GalleryBox;