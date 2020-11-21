import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './movieClip.scss';

const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=bts&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

class MovieClip extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    return fetch(YOUTUBE_API, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result }))
      .catch((error) => console.log('error', error));
  };

  render() {
    const { videos } = this.state;
    console.log(videos.items);
    const videoArr = videos.items;
    console.log(videoArr);
    return (
      <div className='MovieClip'>
        <ul>
          {videoArr &&
            videoArr.map((video) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target='_blank'
                key={video.id.videoId}>
                <li>
                  <div className='thumbnail'>
                    <div className='playIcon'>
                      <FontAwesomeIcon icon={faPlayCircle} />
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
