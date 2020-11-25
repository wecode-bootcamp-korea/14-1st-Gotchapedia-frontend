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
      RECENT_KEYWORDS: [],
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleInputBlur);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleInputBlur);
  }

  handleInputBlur = (e) => {
    const isExist = e.composedPath().includes(this.props.inputRef.current);
    if (!isExist) {
      this.setState({ isListActive: false });
    }
  };

  componentDidMount() {
    this.loadDetailData();
  }

  loadDetailData = () => {
    fetch(DETAIL_API, {
      method: 'GET',
      headers: {
        Authorization: DETAIL_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ detailData: res.data }))
      .catch((error) => console.log('error', error));
  };

  goToDetail = (e) => {
    this.props.history.push(`/movie-detail/${this.props.movieId}`);
  };

  saveKeyword = () => {
    const { searchValue } = this.state;
    searchValueList.push(searchValue);
    searchValueList = Array.from(new Set([...searchValueList]));
    localStorage.setItem(RECENT_KEYWORDS, JSON.stringify(searchValueList));
  };

  deleteKeywords = () => {
    localStorage.removeItem(RECENT_KEYWORDS);
    this.setState({ RECENT_KEYWORDS });
  };

  searchMovie = (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const { searchData } = this.props;
    const searchPool = [...searchData.data];
    const searchKeywords = searchValue.split(' ');
    const tempFilteredMovie =
      searchValue &&
      searchPool.filter((movie) => {
        return searchKeywords.every((keyword) => movie.title.includes(keyword));
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
    let loadedKeywords = JSON.parse(localStorage.getItem(RECENT_KEYWORDS));

    return (
      <div className='Search'>
        <input
          type='text'
          className='searchInput'
          placeholder='작품 제목,배우,감독을 검색해보세요.'
          autoCapitalize='none'
          value={searchValue}
          onChange={this.onSearchInputChange}
          onFocus={() => this.setState({ isListActive: true })}
          ref={this.input}
          onKeyUp={this.searchMovie}
        />
        <div className={isListActive ? 'listBox' : 'displayNone'}>
          <div className='searchList'>
            <ul className='filteredList'>
              {filteredMovie?.length > 0 &&
                filteredMovie.map((movie) => (
                  <li
                    className='resultMovie'
                    key={movie.movieId}
                    className={movie.movieId}>
                    {movie.title}
                  </li>
                ))}
            </ul>
            <div
              className={
                loadedKeywords?.length > 0
                  ? 'searchHeaderWrapper'
                  : 'displayNone'
              }>
              <span>최근 검색어</span>
              <div className='keywordDeleteBtn' onClick={this.deleteKeywords}>
                모두 삭제
              </div>
            </div>

            <ul className='latestList'>
              {loadedKeywords?.length > 0 &&
                loadedKeywords.map((keyword, idx) => (
                  <li key={idx} className='resultMovie'>
                    {keyword}
                  </li>
                ))}
            </ul>
          </div>
          <div className='popularList'>
            <div className='searchHeaderWrapper'>
              <span>인기 검색어</span>
              <div className='keywordDeleteBtn' onClick={this.deleteKeywords}>
                모두 삭제
              </div>
            </div>
            <ul className='latestList'>
              <li
                className='resultMovie'
                key='23'
                onClick={() => {
                  this.props.history.push('/movie-detail/23');
                }}>
                바닐라 스카이
              </li>
              <li
                className='resultMovie'
                onClick={() => {
                  this.props.history.push('/movie-detail/6');
                }}>
                버팔로66
              </li>
              <li
                className='resultMovie'
                onClick={() => {
                  this.props.history.push('/movie-detail/4');
                }}>
                붉은 돼지
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
