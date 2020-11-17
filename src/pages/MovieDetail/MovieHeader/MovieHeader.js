import React, { Component } from 'react';
import './movieHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class MovieHeader extends Component {
  render() {
    return (
      <>
        <div className='MovieHeaderTop'><img src='/images/headerImage.jpg' alt='바닐라스카이재밌어요'></img></div>
        <div className='MovieHeaderBottom'>
          <div className='posterWrapper'>
            <img src='/images/vanilaSkyPoster.jpeg' alt='바닐라스카이꼭보세요'></img>
            <div className='posterDetailWrapper'> {/* display column 줘라 */}
              <div className='posterRanking'>예매순위 · <span>1위(100%)</span> 개봉 · <span>1일전</span> 누적 관객 · <span>1억명</span></div>
              <div className='posterTitle'>바닐라스카이</div>
              <div className='posterTitleDetail'>2001 · 스릴러 · SF</div>
              <div className='posterRating'>
                <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />4.9 (3292명)</div>
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIcon'>+</div>
                      <div className='wantToSee'>보고싶어요</div>
                    </button>
                    <button className='modal'>X</button>
                  </div>
                  <div className='starRating'>
                    <div className='ratingTitle'>평가하기</div>
                    <div className='starAnimation'>
                      <FontAwesomeIcon className='star' icon={faStar} />
                      <FontAwesomeIcon className='star' icon={faStar} />
                      <FontAwesomeIcon className='star' icon={faStar} />
                      <FontAwesomeIcon className='star' icon={faStar} />
                      <FontAwesomeIcon className='star' icon={faStar} />
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MovieHeader;
