import React, { Component } from 'react';

class PreferredCountryGenre extends Component {
  constructor() {
    super();
    this.state = {
      isMore: false,
    };
  }

  render() {
    const preferredCountryData = this.props.userData.data;
    const preferredGenreData = this.props.userGenreData.data;
    const { isMore } = this.state;

    console.log(preferredCountryData);
    return (
      <>
        <div className='preferredCountry'>
          <div className='title'>영화 선호국가</div>
          <ul className='top3'>
            {() => {
              let arr = [];
              for (let i = 1; i < 4; i++) {
                arr.push(
                  <li>
                    <div className='bold big'>
                      {preferredCountryData[i].label}
                    </div>
                    <div className='grey small'>
                      {preferredCountryData[i].score}점 ・{' '}
                      {preferredCountryData[i].count}편
                    </div>
                  </li>
                );
              }
              return arr;
            }}
          </ul>
          <ul className='top6 grey'>
            <li>
              <div>{preferredCountryData[1].label}</div>
              <div className='small'>
                {preferredCountryData[1].score}점 ・{' '}
                {preferredCountryData[1].count}편
              </div>
            </li>
            <li>
              <div>{preferredCountryData[2].label}</div>
              <div className='small'>
                {preferredCountryData[2].score}점 ・{' '}
                {preferredCountryData[2].count}편
              </div>
            </li>
            <li>
              <div>{preferredCountryData[3].label}</div>
              <div className='small'>
                {preferredCountryData[3].score}점 ・{' '}
                {preferredCountryData[3].count}편
              </div>
            </li>
          </ul>
        </div>
        <div className='preferredGenre'>
          <div className='title'>영화 선호장르</div>
          <div className='genreWrapper'>
            <div className='genreMbti pink'>인생은 역시 한 편의 드라마!</div>
            <ul className='top3'>
              {() => {
                let arr = [];
                for (let i = 1; i < 4; i++) {
                  arr.push(
                    <li>
                      <div className='bold big'>
                        {preferredGenreData[i].label}
                      </div>
                      <div className='grey small'>
                        {preferredGenreData[i].score}점 ・{' '}
                        {preferredGenreData[i].count}편
                      </div>
                    </li>
                  );
                }
                return arr;
              }}
            </ul>
            <ul className='top6 grey'>
              {() => {
                let arr = [];
                for (let i = 4; i < 7; i++) {
                  arr.push(
                    <li>
                      <div>{preferredGenreData[i].label}</div>
                      <div className='small'>
                        {preferredGenreData[i].score}점 ・{' '}
                        {preferredGenreData[i].count}편
                      </div>
                    </li>
                  );
                }
                return arr;
              }}
              <div className={isMore ? '' : 'displayNone'}>
                {() => {
                  let arr = [];
                  for (let i = 6; i < 9; i++) {
                    arr.push(
                      <li>
                        <div>{preferredGenreData[i].label}</div>
                        <div className='small'>
                          {preferredGenreData[i].score}점 ・{' '}
                          {preferredGenreData[i].count}편
                        </div>
                      </li>
                    );
                  }
                  return arr;
                }}
              </div>
            </ul>
            <button
              className='moreBtn bold'
              onClick={() => {
                this.setState({ isMore: !isMore });
              }}>
              더보기
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default PreferredCountryGenre;
