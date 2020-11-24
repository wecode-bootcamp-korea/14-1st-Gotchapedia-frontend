import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './videoBox.scss';

class VideoBox extends Component {

  render() {
    const { subImage } = this.props;

    return (
      <div className='VideoBox'>
        {subImage.map((image) => {
          return (
            <div className='videoWrapper'>
              <div className='videoContents'>
                <img className='video' src={image.url} alt='갤러리이미지'></img>
                <FontAwesomeIcon className='playIcon' icon={faPlay} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default VideoBox;