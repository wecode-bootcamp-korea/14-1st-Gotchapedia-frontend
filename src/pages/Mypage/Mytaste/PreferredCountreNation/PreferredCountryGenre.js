import React, { Component } from 'react';

class PreferredCountryGenre extends Component {
  render() {
    const preferredData = this.props.userData.data;
    console.log(preferredData);
    return (
      <>
        <div className='preferredCountry'>
          <div className='title'>영화 선호국가</div>
          <ul className='top3'>
            <li>
              <div className='bold big'>{preferredData && preferredData[0].label}</div>
              <div className='grey small'>
                {preferredData[0].score}점 ・ {preferredData[0].count}편
              </div>
            </li>
            <li>
              <div className='bold big'>{preferredData[1].label}</div>
              <div className='grey small'>
                {preferredData[1].score}점 ・ {preferredData[1].count}편편
              </div>
            </li>
            <li>
              <div className='bold big'>{preferredData[2].label}</div>
              <div className='grey small'>
                {preferredData[2].score}점 ・ {preferredData[2].count}편
              </div>
            </li>
          </ul>
          <ul className='top6 grey'>
            <li>
              <div>{preferredData[3].label}</div>
              <div className='small'>
                {preferredData[3].score}점 ・ {preferredData[3].count}편
              </div>
            </li>
            <li>
              <div>{preferredData[4].label}</div>
              <div className='small'>
                {preferredData[4].score}점 ・ {preferredData[4].count}편
              </div>
            </li>
            <li>
              <div>{preferredData[5].label}</div>
              <div className='small'>
                {preferredData[5].score}점 ・ {preferredData[5].count}편
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
