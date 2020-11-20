import React, { Component } from 'react';
import './overview.scss';
import Nav from '../../../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Overview extends Component {

  render() {

    return(
      <>
        <Nav />
        <div className='overviewHeading'>
          <FontAwesomeIcon className='headingArrow' icon={faArrowLeft} />
          <div className='headingTitle'>기본 정보</div>
        </div>
        <div className='overviewContentsWrapper'>
          <div className='overviewContents'>
            <div className='overviewTitle'>
              <div className='title'>원제</div>
              <div className='content'>Run</div>
            </div>
            <div className='overviewYears'>
              <div className='title'>제작 연도</div>
              <div className='content'>2020</div>
            </div>
            <div className='overviewCountry'>
              <div className='title'>국가</div>
              <div className='content'>미국</div>
            </div>
            <div className='overviewGenre'>
              <div className='title'>장르</div>
              <div className='content'>공포/미스터리/스릴러</div>
            </div>
            <div className='overviewTime'>
              <div className='title'>상영시간</div>
              <div className='content'>1시간 30분</div>
            </div>
            <div className='overviewDetail'>
              <div className='title'>내용</div>
              <div className='content'>
                가장 안전했던 그곳이 가장 위험한 공간이 된다! 태어날 때부터 장애 때문에 휠체어를 타고 외딴 집에서 엄마와 함께 살며 일상을 보내는 ‘클로이’. 딸을 사랑으로 돌보는 엄마 덕분에 힘들지만 매일을 긍정적으로 살아간다. 그러던 어느 날 식탁에 놓인 장바구니에서 하나의 물건을 발견하게 되고 믿었던 모든 일상이 흔들리기 시작하는데…
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Overview;
