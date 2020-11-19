import React, { Component } from 'react';

import './movieClip.scss';

const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=bts&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

class MovieClip extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.getVideos();
  }

  getVideos = async () => {
    const videos = await this.callApi();
    this.setState({ videos });
  };

  callApi = () => {
    return fetch(API, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  render() {
    console.log(this.state.videos);
    return <div className='MovieClip'>videos</div>;
  }
}

export default MovieClip;
