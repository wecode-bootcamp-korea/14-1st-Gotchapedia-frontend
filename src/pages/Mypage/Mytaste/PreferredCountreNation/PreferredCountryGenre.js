import React, { Component } from 'react';

class PreferredCountryGenre extends Component {
  render() {
    const preferredCountryData = this.props.userData.data;
    return (
      <>
        <div className='preferredCountry'>
          <div className='title'>영화 선호국가</div>
          <ul className='top3'>
            <li>
              <div className='bold big'>{preferredCountryData[0].label}</div>
              <div className='grey small'>
                {preferredCountryData[0].score}점 ・{' '}
                {preferredCountryData[0].count}편
              </div>
            </li>
            <li>
              <div className='bold big'>{preferredCountryData[1].label}</div>
              <div className='grey small'>
                {preferredCountryData[1].score}점 ・{' '}
                {preferredCountryData[1].count}편편
              </div>
            </li>
            <li>
              <div className='bold big'>{preferredCountryData[2].label}</div>
              <div className='grey small'>
                {preferredCountryData[2].score}점 ・{' '}
                {preferredCountryData[2].count}편
              </div>
            </li>
          </ul>
          <ul className='top6 grey'>
            <li>
              <div>{preferredCountryData[3].label}</div>
              <div className='small'>
                {preferredCountryData[3].score}점 ・{' '}
                {preferredCountryData[3].count}편
              </div>
            </li>
            <li>
              <div>{preferredCountryData[4].label}</div>
              <div className='small'>
                {preferredCountryData[4].score}점 ・{' '}
                {preferredCountryData[4].count}편
              </div>
            </li>
            <li>
              <div>{preferredCountryData[5].label}</div>
              <div className='small'>
                {preferredCountryData[5].score}점 ・{' '}
                {preferredCountryData[5].count}편
              </div>
            </li>
          </ul>
        </div>
        <div className='preferredGenre'>
          <div className='title'>영화 선호장르</div>
          <div className='genreWrapper'>
            <div className='genreMbti pink'>인생은 역시 한 편의 드라마!</div>
            <ul className='top3'>
              <li>
                <div className='bold big'>드라마</div>
                <div className='grey small'>91점 ・ 485편</div>
              </li>
              <li>
                <div className='bold big'>모험</div>
                <div className='grey small'>90점 ・ 275편</div>
              </li>
              <li>
                <div className='bold big'>액션</div>
                <div className='grey small'>89점 ・ 288편</div>
              </li>
            </ul>
            <ul className='top6 grey'>
              <li>
                <div>코미디</div>
                <div className='small'>88점 ・ 298편</div>
              </li>
              <li>
                <div>판타지</div>
                <div className='small'>88점 ・ 211편</div>
              </li>
              <li>
                <div>SF</div>
                <div className='small'>87점 ・ 172편</div>
              </li>
            </ul>
            <button className='moreBtn bold'>더보기</button>
          </div>
        </div>
      </>
    );
  }
}
export default PreferredCountryGenre;
