import React, { Component } from 'react';
import './videoBox.scss';

class VideoBox extends Component {

  render() {
    const { pictureVideoData } = this.props;

    return (
      <div className='VideoBox'>
        <iframe title='Video' src={pictureVideoData.image} alt='동영상' ></iframe>
        <div className='videoDetail'>예고편</div>
      </div>
    )
  }
}

export default VideoBox;