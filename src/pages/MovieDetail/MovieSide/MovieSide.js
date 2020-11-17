import React, { Component } from 'react';
import './movieSide.scss';

class MovieSide extends Component {
  render() {
    return (
      <div className='MovieSide'>
        <div className='galleryWrapper'>
          <div className='galleryHeading'>갤러리</div>
          <img src='/images/vanilaSkyHeader.png' alt='갤러리이미지'></img>
          <img src='/images/vaniliaSkyImage.png' alt='갤러리이미지'></img>
        </div>
        <div className='border'></div>
        <div className='videoWrapper'>
          <div className='videoHeading'>동영상</div>
          <div className='videoBoxWrapper'>
            <div className='videoBox'>
              <iframe src='https://www.youtube.com/watch?v=ziU2MBPbKAs' alt='동영상'></iframe>
              <div className='videoDetail'>메인 예고편</div>
            </div>
            <div className='videoBox'>
              <iframe src='https://www.youtube.com/watch?v=ziU2MBPbKAs' alt='동영상'></iframe>
              <div className='videoDetail'>바닐라 스카이 짱</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieSide;
