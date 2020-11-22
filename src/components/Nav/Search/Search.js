import React, { Component } from 'react';
import './search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      isSearchOn: false,
      isListActive: false,
      filteredMovie: [],
    };
  }

  searchMovie = (event) => {
    const { searchValue, filteredMovie } = this.state;
    event.preventDefault();
    const { searchData } = this.props;
    const searchPool = searchData.data;
    const searchKeywords = searchValue.split(' ');
    let tempSearchPool = [...searchPool];
    let tempFilteredMovie = [];

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

    this.setState({ filteredMovie: tempFilteredMovie });
  };

  onSearchInputChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { searchValue, isSearchOn, isListActive, filteredMovie } = this.state;

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
              <div className='keywordDeleteBtn'>모두 삭제</div>
            </div>
            <ul className='latestList'>
              {filteredMovie &&
                filteredMovie.map((movie) => (
                  <li className='resultMovie'>{movie.title}</li>
                ))}
            </ul>
          </div>
          <div className='popularList'>
            <div className='searchHeaderWrapper'>
              <span>인기 검색어</span>
              <div className='keywordDeleteBtn'>모두 삭제</div>
            </div>
            <ul className='latestList'>
              <li className='resultMovie'>바닐라 스카이</li>
              <li className='resultMovie'>라라랜드</li>
              <li className='resultMovie'>붉은 돼지</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
