import React, { Component } from 'react';
// import Slider from 'react-slick';
// import GalleryBox from './GalleryBox/GalleryBox';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
// import VideoBox from './VideoBox/VideoBox';
import './movieSide.scss';

class MovieSide extends Component {
  constructor() {
    super();
    this.state = {
      pictureVideoData: [],
    }
  }

  componentDidMount() {
    fetch("/Data/contentdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        pictureVideoData: res.data,
      })
    })
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    // 슬릭 슬라이더 나중에 너무 강함
    const { pictureVideoData } = this.state;
    return (
      <div className='MovieSide'>
        <div className='galleryWrapper'>
          <div className='galleryHeading'>갤러리</div>
          {/* <Slider {...settings}>
            {pictureVideoData.map((el, idx) => {
              return (
                <GalleryBox key={idx} pictureVideoData={el}/>
              )
            })}
           
          </Slider> */}
        </div>
        <div className='border'></div>
        <div className='videoWrapper'>
          <div className='videoHeading'>동영상</div>
          <div className='videoBoxWrapper'>
            {/* <Slider {...settings}>
              {pictureVideoData.map((el, idx) => {
                return (
                  <VideoBox key={idx} pictureVideoData={el}/>
                )
              })}
            </Slider> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieSide;
