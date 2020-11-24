import React, { Component } from 'react';
import './movieHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import StarRating from './StarRating/StarRating';
import WantToSee from './WantToSee/WantToSee';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Rating from './StarRating/StarRating';

const STAR_API = "http://10.58.1.5:8000/analysis/star/23"
// const MOVIEDETAIL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

class MovieHeader extends Component {
  constructor() {
    super();
    // 필요한 것
    // userId, movieId, rateStar
    this.state = {
      headerData: [],
      isWantToSee: false,
      rateStar: null,
      starHover: null,
      starScore: null,
      // scoreText: '평가하기'
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

  // sendRateStarData = () => {
  //   const { rateStar } = this.state;
  //   fetch(STAR_API, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       starPoint: rateStar
  //     }),
  //   })
  //     .then((res) => { return res.json()})
  // }
  
  // ratingStars = (ratingValue) => {
  //   this.setState({
  //     rateStar: ratingValue, 
  //   })
  //   this.sendRateStarData();
  // }

  // mouseLeaveEvent = () => {
  //   this.setState({
  //     starHover: null,
  //   })
  // }

  // mouseEnterEvent = (ratingValue) => {
  //   this.setState({
  //     starHover: ratingValue,
  //   })
  // }

  render() {
    console.log("asudfhusbdhf: ", this.props.movieHeaderData)
    const { isWantToSee } = this.state;
    const { movieHeaderData } = this.props;
    const subImage = movieHeaderData.subImage;
    const genre = movieHeaderData.genre;

    // console.log(movieHeaderData);

    return (
      <div>
        <div className='MovieHeaderTop'>
          <img 
            src={subImage[0].url} 
            alt='무비서브이미지'>
          </img>
        </div>
        {/* <div className='MovieHeaderTop'><img src='/images/url1.jpg' alt='무비서브이미지'></img></div> */}
        <div className='MovieHeaderBottom'>
          <div className='posterWrapper'>
            <img src={movieHeaderData.mainImage} alt='바닐라스카이꼭보세요'></img>
            <div className='posterDetailWrapper'>
              {/* 필요없는 data */}
              {/* <div className='posterRanking'>예매순위 · <span>1위(100%)</span> 개봉 · <span>1일전</span> 누적 관객 · <span>1억명</span></div> */}
              <div className='posterTitle'>{movieHeaderData.name}</div>
              <div className='posterTitleDetail'>{genre[0].name}</div>
              <div className='posterRating'>
                {/* <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />{movieHeaderData.comments[0].starPoint}(3292명)</div> */}
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIconWrapper'><FontAwesomeIcon className='plusIcon' icon={faPlus} /></div>
                      <div className={isWantToSee ? 'wantToSee' : '' } onClick={this.openWantToSee} >보고싶어요</div>
                    </button>
                    <button className='modalBtnWrapper'>
                      <div className='modalBtn'>▾</div>
                    </button>
                  </div>
                  <div className='starRatingBox'>
                    <Rating />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isWantToSee ? '' : 'displayNone'}>
          <WantToSee
            wantToSeeData={movieHeaderData}
            isWantToSee={isWantToSee}
            closeWantToSee={this.closeWantToSee}
          />
        </div>
      </div>
    )
  }
}

export default MovieHeader;
