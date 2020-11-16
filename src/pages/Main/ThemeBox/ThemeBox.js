import React, { Component } from 'react';
import MovieBox from './MovieBox/MovieBox';
import './themeBox.scss';

class ThemeBox extends Component {
  render() {
    return (
      <div>
        Theme Box
        <MovieBox />
      </div>
    );
  }
}

export default ThemeBox;
