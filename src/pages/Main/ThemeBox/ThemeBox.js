import React, { Component } from 'react';
import MovieBox from './MovieBox/MovieBox';
import './themeBox.scss';

class ThemeBox extends Component {
  constructor() {
    super();
    this.state = {
      movieBox: [],
      movieBoxValue: '',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/moviebeta.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movieBox: res.data,
        });
      });
  }

  render() {
    const { movieBox } = this.state;

    return (
      <div className='boxRankingWrap'>
        Theme Box
        {/* <MovieBox data={this.state.commonList} /> */}
        <div className='boxRankingHeadWrap'>
          <div className='boxRankingHead'>박스오피스</div>
        </div>
        <div className='boxRankingBodyWrap'>
          {movieBox.map((boxRankingBody) => {
            return <MovieBox moviedata={boxRankingBody} />;
          })}
          <div className='boxRankingBody'>
            <div className=''></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThemeBox;
