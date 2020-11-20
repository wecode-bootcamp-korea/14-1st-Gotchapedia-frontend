import React, { Component } from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footerHead'>
          <span className='footerHeadFont'>
            지금까지{' '}
            <em>
              {' '}
              <FontAwesomeIcon icon={faStar} /> 583,583,390개의 평가가{' '}
            </em>{' '}
            쌓였어요.
          </span>
        </div>
        <div className='footerBodyWrap'>
          <div className='footerBody'>
            <div className='footerBodyContents'>
              <ul className='footerBodyOne'>
                <span>서비스 이용약관 ㅣ</span><span>개인정보 처리방침 ㅣ</span>
                <span> 회사 안내</span>
              </ul>
              <ul className='footerBodyTwo'>
                <span>고객센터 ㅣ</span>
                <span> cs@gotchapedia.co.kr, 02-123-4567</span>
              </ul>
              <ul className='footerBodyThree'>
                <span>제휴 및 대외 협력 ㅣ</span>
                <span>contact@gotcha.com, 070-123-4567</span>
              </ul>
              <ul className='footerBodyFour'>
                <span>주식회사 갓챠 ㅣ</span>
                <span>
                  {' '}
                  공동대표 고수희, 고은정, 김병준, 김태현, 이영주, 장규석 ㅣ{' '}
                </span>
                <span>
                  {' '}
                  서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
                </span>
              </ul>
              <ul className='footerBodyFive'>
                <span>사업자 등록번호 123-45-67890</span>
              </ul>
              <ul className='footerBodySix'>
                
                <span className='gotchaLogoWrap'>
                  <img className='gotchaLogo' alt='' src='' />
                </span>
                <span> 2020 Gotcha.Inc</span>
              </ul>
            </div>
            <div className='footerRightBody'>
              <div className='footerLang'>
                <button className='langButton'>한국어</button>
              </div>
              <div className='footerSocialLogo'>
                {/* span으로 감싸서 처리하기
                <img fb/>
                <img twiter/>
                <img gotcha/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
