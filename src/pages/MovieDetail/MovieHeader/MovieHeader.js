import React, { Component } from 'react';
import './movieHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating/StarRating';
import WantToSee from './WantToSee/WantToSee';

class MovieHeader extends Component {
  constructor() {
    super();
    this.state = {
      isWantToSee: false,
      // headerData: this.props.contentsData
    }
  }

  openWantToSee = () => {
    this.setState({
      isWantToSee: true,
    })
  }

  closeWantToSee = () => {
    this.setState({
      isWantToSee: false,
    })
  }

  render() {
    const { isWantToSee, headerData } = this.state;
    const { contentsData } = this.props;

    // 이게 왜 안되는거야??
    // console.log(contentsData[0].headerImage);
    return (
      <>
        <div className='MovieHeaderTop'><img src="/images/vanilaSkyHeaderImage.jpg" alt='바닐라스카이재밌어요'></img></div>
        <div className='MovieHeaderBottom'>
          <div className='posterWrapper'>
            <img src='/images/vanilaSkyPoster.jpeg' alt='바닐라스카이꼭보세요'></img>
            <div className='posterDetailWrapper'>
              <div className='posterRanking'>예매순위 · <span>1위(100%)</span> 개봉 · <span>1일전</span> 누적 관객 · <span>1억명</span></div>
              <div className='posterTitle'>바닐라스카이</div>
              <div className='posterTitleDetail'>2001 · 스릴러 · SF</div>
              <div className='posterRating'>
                <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />4.9 (3292명)</div>
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIcon'>+</div>
                      <div className='wantToSee' onClick={this.openWantToSee} >보고싶어요</div>
                    </button>
                    <button className='modal'>▾</button>
                  </div>
                  <div className='starRatingBox'>
                    <div className='ratingTitle'>평가하기</div>
                    <StarRating />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isWantToSee ? '' : 'displayNone'}>
          <WantToSee 
            isWantToSee={isWantToSee}
            closeWantToSee={this.closeWantToSee}
          />
        </div>
      </>
    )
  }
}

export default MovieHeader;
