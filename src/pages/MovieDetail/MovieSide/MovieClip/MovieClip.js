import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { YOUTUBE_API } from '../../../../config';
import './movieClip.scss';

class MovieClip extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    return fetch(YOUTUBE_API, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result.items }))
      .catch((error) => console.log('error', error));
  }

  render() {
    const { videos } = this.state;
    console.log('videos >>>>>>>>>> ', videos);

    return (
      <div className='MovieClip'>
        <ul>
          {videos &&
            videos.map((video) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target='_blank'
                key={video.id.videoId}>
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
