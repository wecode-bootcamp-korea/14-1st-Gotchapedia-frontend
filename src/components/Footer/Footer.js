import React, { Component } from 'react';
import CountUp from 'react-countup';
import 'components/Footer/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGooglePlus } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footerHead'>
          <span className='footerHeadFont'>
            지금까지{' '}
            <span>
              <FontAwesomeIcon icon={faStar} />
              <CountUp
                duration={4}
                delay={2}
                redraw={true}
                start={0}
                end={583583390}
              />
              {'  '} 개의 평가가
            </span>{' '}
            쌓였어요.
          </span>
        </div>
        <div className='footerBodyWrap'>
          <div className='footerBody'>
            <div className='footerBodyContents'>
              <ul className='footerBodyService'>
                <span>서비스 이용약관 ㅣ</span><span>개인정보 처리방침 ㅣ</span>
                <span> 회사 안내</span>
              </ul>
              <ul className='footerBodyContact'>
                <span>고객센터 ㅣ</span>
                <span> cs@gotchapedia.co.kr, 02-123-4567</span>
              </ul>
              <ul className='footerBodyPartner'>
                <span>제휴 및 대외 협력 ㅣ</span>
                <span>contact@gotcha.com, 070-123-4567</span>
              </ul>
              <ul className='footerBodyOwner'>
                <span>주식회사 갓챠 ㅣ</span>
                <span>
                  공동대표 고수희, 고은정, 김병준, 김태현, 이영주, 장규석 ㅣ
                </span>
                <span>
                  서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
                </span>
              </ul>
              <ul className='footerBodyCorNumber'>
                <span>사업자 등록번호 123-45-67890</span>
              </ul>
              <ul className='footerBodyGotcha'>
                
                <span className='gotchaLogoWrap'>
                  <img className='gotchaLogo' alt='' src='' />
                </span>
                <span> 2020 Gotcha.Inc</span>
              </ul>
            </div>
            <div className='footerRightBody'>
              <div className='footerLang'>
                <button className='langButton'>
                  <em>한국어</em>
                  <span>▾</span>
                </button>
              </div>
              <div className='footerSocialLogo'>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{ display: 'inline-block' }}
                    className='twitterIconWrapper'
                  >
                    <FaGithub
                      style={{
                        fontSize: '24px',
                        margin: '7px',
                        color: '#848485',
                      }}
                      className='twitterIcon'
                    />
                  </div>
                  <div
                    style={{ display: 'inline-block' }}
                    className='facebookIconWrapper'
                  >
                    <FaFacebook
                      style={{
                        fontSize: '24px',
                        margin: '7px',
                        color: '#848485',
                      }}
                      className='facebookIcon'
                    />
                  </div>
                  <div
                    style={{ display: 'inline-block' }}
                    className='googleIconWrapper'
                  >
                    <FaGooglePlus
                      style={{
                        fontSize: '24px',
                        margin: '7px',
                        color: '#848485',
                      }}
                      className='googleIcon'
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
