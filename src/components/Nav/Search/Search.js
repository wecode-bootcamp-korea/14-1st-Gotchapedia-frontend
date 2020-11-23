import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { DETAIL_API, DETAIL_TOKEN } from '../../../config';
import './search.scss';

const RECENT_KEYWORDS = 'RECENT_KEYWORDS';
let searchValueList = [];

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      isSearchOn: false,
      isListActive: false,
      filteredMovie: [],
      detailData: {},
    };
  }

  // 잠시 꺼놓습니다..
  // componentDidMount() {
  //   this.loadDetailData();
  // }

  // loadDetailData = () => {
  //   fetch(DETAIL_API, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: DETAIL_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ detailData: res.data }))
  //     .catch((error) => console.log('error', error));
  // };

  goToDetail = (event) => {
    console.log('click'); // 표시되지 않음... why..?
    // this.props.history.push(`movie-detail/${event.key}`);
    // this.setState({ isListActive: false });
  };

  saveKeyword = () => {
    const { searchValue } = this.state;
    searchValueList.push(searchValue);
    const setSearchValueList = Array.from(new Set(searchValueList));
    localStorage.setItem(RECENT_KEYWORDS, JSON.stringify(setSearchValueList));
  };

  deleteKeywords = () => {
    console.log('click'); // 클릭이 안 됨.. 왜...?
  };

  searchMovie = (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const { searchData } = this.props;
    const searchPool = searchData.data;
    const searchKeywords = searchValue.split(' ');
    let tempSearchPool = [...searchPool];
    let tempFilteredMovie = [];
    if (searchValue.trim() === '') {
      return;
    }
    searchKeywords.forEach((key) => {
      if (key !== '') {
        tempFilteredMovie = tempSearchPool.filter((movie) => {
          if (movie.title.includes(key)) {
            return true;
          }
        });
        tempSearchPool = [...tempFilteredMovie];
      }
    });
    if (event.key === 'Enter') {
      this.saveKeyword();
    }
    this.setState({ filteredMovie: tempFilteredMovie });
  };

  onSearchInputChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const {
      searchValue,
      isSearchOn,
      isListActive,
      filteredMovie,
      detailData,
    } = this.state;
    let loadedKeywords = localStorage.getItem(RECENT_KEYWORDS);
    console.log(loadedKeywords);

    return (
      <>
        <input
          type='text'
          className='searchInput'
          placeholder='작품 제목,배우,감독을 검색해보세요.'
          autoCapitalize='none'
          value={searchValue}
          onChange={this.onSearchInputChange}
          onFocus={() => this.setState({ isListActive: true })}
          onBlur={() =>
            this.setState({ isListActive: false, isSearchOn: false })
          }
          onKeyUp={this.searchMovie}
        />
        <div className={isListActive ? 'listBox' : 'displayNone'}>
          <div className='searchList'>
            <div className='searchHeaderWrapper'>
              <span>최근 검색어</span>
              <div className='keywordDeleteBtn' onClick={this.deleteKeywords}>
                모두 삭제
              </div>
            </div>
            <ul className='latestList'>
              {filteredMovie &&
                filteredMovie.map((movie) => (
                  <li
                    className='resultMovie'
                    key={movie.movieId}
                    className={movie.movieId}>
                    {movie.title}
                  </li>
                ))}
            </ul>
          </div>
          <div className='popularList'>
            <div className='searchHeaderWrapper'>
              <span>인기 검색어</span>
              <div className='keywordDeleteBtn'>모두 삭제</div>
            </div>
            <ul className='latestList'>
              <li className='resultMovie' key='23' onClick={this.goToDetail}>
                바닐라 스카이
              </li>
              <li className='resultMovie'>라라랜드</li>
              <li className='resultMovie'>붉은 돼지</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Search);
