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
              <div>{preferredCountryData[3]?.label}</div>
              <div className='small'>
                {preferredCountryData[3]?.score}점 ・{' '}
                {preferredCountryData[3]?.count}편
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
                <div className='bold big'>{preferredGenreData[0].label}</div>
                <div className='grey small'>
                  {preferredGenreData[0].score}점 ・{' '}
                  {preferredGenreData[0].count}편
                </div>
              </li>
              <li>
                <div className='bold big'>{preferredGenreData[1].label}</div>
                <div className='grey small'>
                  {preferredGenreData[1].score}점 ・{' '}
                  {preferredGenreData[1].count}편
                </div>
              </li>
              <li>
                <div className='bold big'>{preferredGenreData[2].label}</div>
                <div className='grey small'>
                  {preferredGenreData[2].score}점 ・{' '}
                  {preferredGenreData[2].count}편
                </div>
              </li>
            </ul>
            <ul className='top6 grey'>
              <li>
                <div>{preferredGenreData[3].label}</div>
                <div className='small'>
                  {preferredGenreData[3].score}점 ・{' '}
                  {preferredGenreData[3].count}편
                </div>
              </li>
              <li>
                <div>{preferredGenreData[4].label}</div>
                <div className='small'>
                  {preferredGenreData[4].score}점 ・{' '}
                  {preferredGenreData[4].count}편
                </div>
              </li>
              <li>
                <div>{preferredGenreData[5].label}</div>
                <div className='small'>
                  {preferredGenreData[5].score}점 ・{' '}
                  {preferredGenreData[5].count}편
                </div>
              </li>
              <div className={isMore ? '' : 'displayNone'}>
                <li>
                  <div>{preferredGenreData[6].label}</div>
                  <div className='small'>
                    {preferredGenreData[6].score}점 ・{' '}
                    {preferredGenreData[6].count}편
                  </div>
                </li>
                <li>
                  <div>{preferredGenreData[7].label}</div>
                  <div className='small'>
                    {preferredGenreData[7].score}점 ・{' '}
                    {preferredGenreData[7].count}편
                  </div>
                </li>
                <li>
                  <div>{preferredGenreData[8].label}</div>
                  <div className='small'>
                    {preferredGenreData[8].score}점 ・{' '}
                    {preferredGenreData[8].count}편
                  </div>
                </li>
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
