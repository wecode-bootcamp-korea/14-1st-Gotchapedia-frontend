import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MYPAGE_API } from '../../../config';
import './search.scss';

const RECENT_KEYWORDS = 'RECENT_KEYWORDS';
let searchValueList = [];

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: [],
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
    this.loadSearchData();
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

  loadSearchData = () => {
    fetch(MYPAGE_API)
      .then((res) => res.json())
      .then((res) => this.setState({ searchData: res.data }))
      .catch((error) => console.log('error', error));
  };

  goToDetail = (e) => {
    this.state.history.push(`/movie-detail/${this.state.searchData.movieId}`);
  };

  saveKeyword = () => {
    if (this.state.searchValue.trim() == '') return;
    searchValueList = Array.from(
      new Set([...searchValueList, this.state.searchValue])
    );
    localStorage.setItem(RECENT_KEYWORDS, JSON.stringify(searchValueList));
  };

  deleteKeywords = () => {
    localStorage.removeItem(RECENT_KEYWORDS);
    this.setState({ RECENT_KEYWORDS });
  };

  searchMovie = (event) => {
    event.preventDefault();
    const { searchValue, searchData, filteredMovie } = this.state;
    const searchKeywords = searchValue.split(' ');
    let tempFilteredMovie = [...filteredMovie];
    tempFilteredMovie =
      searchValue &&
      [...searchData].filter((movie) => {
        return searchKeywords.every((keyword) => movie.title.includes(keyword));
      });

    if (event.key === 'Enter') {
      this.saveKeyword();
      this.setState({ searchValue: '' });
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
              {filteredMovie.length > 0 &&
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
                loadedKeywords.length > 0
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
