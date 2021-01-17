import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'pages/MovieDetail/MovieSide/MovieClip/movieClip.scss';

class MovieClip extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { videos } = this.props;

    return (
      <div className='MovieClip'>
        <ul>
          {!!videos.length > 0 &&
            videos.map(video => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target='_blank'
                key={video.id.videoId}
              >
                <li>
                  <div className='thumbnail'>
                    <div className='playIcon'>
                      <FontAwesomeIcon icon={faPlayCircle} size='2x' />
                    </div>
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt='thumbnail'
                    />
                  </div>
                  <div className='videoTitle'>{video.snippet.title}</div>
                </li>
              </a>
            ))}
        </ul>
      </div>
    );
  }
}

export default MovieClip;
