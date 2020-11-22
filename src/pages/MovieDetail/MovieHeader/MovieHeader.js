import React, { Component } from 'react';
import './movieHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating/StarRating';
import WantToSee from './WantToSee/WantToSee';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const STARAPI = '스타 API 주소';

// const MOVIEDETAIL_API = "http://10.58.1.5:8000/movie/23";
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
    }
  }

  // componentDidMount() {
  //   fetch(MOVIEDETAIL_API, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       headerData: res.data,
  //     })
  //   })
  //   .catch((err) => console.log('err >>>>> ', err));
  // }

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

  sendRateStarData = () => {
    const { rateStar } = this.state;
    fetch(STARAPI, {
      method: 'POST',
      body: JSON.stringify({
        starPoint: rateStar
      }),
    })
      .then((res) => { return res.json()})
      // .then((res) => console.log(res))
  }
  
  ratingStars = (ratingValue) => {
    this.setState({
      rateStar: ratingValue, 
    })
    this.sendRateStarData();
  }

  mouseLeaveEvent = () => {
    this.setState({
      starHover: null,
    })
  }

  mouseEnterEvent = (ratingValue) => {
    this.setState({
      starHover: ratingValue,
    })
  }

  render() {
    const { isWantToSee, rateStar, starHover } = this.state;
    const { movieHeaderData } = this.props;
    const subImage = movieHeaderData.subImage;

    console.log(movieHeaderData);

    console.log(subImage);
    // 잘나옴 서브 첫번째 이미지
    // console.log(movieHeaderData?.subImage[0].url);
    // console.log(movieHeaderData?.genre[0].name);

    return (
      <>
        {/* 여기 인덱스를 어떻게 줌?? map도 아닌데?? */}

        <div className='MovieHeaderTop'><img src={subImage && subImage[0].url} alt='무비서브이미지'></img></div>

        {/* <div className='MovieHeaderTop'><img src='/images/url1.jpg' alt='무비서브이미지'></img></div> */}
        <div className='MovieHeaderBottom'>
          <div className='posterWrapper'>
            <img src={movieHeaderData?.mainImage} alt='바닐라스카이꼭보세요'></img>
            {/* <img src="/images/mainImage.jpeg" alt='바닐라스카이꼭보세요'></img> */}
            <div className='posterDetailWrapper'>
              {/* 필요없는 data */}
              {/* <div className='posterRanking'>예매순위 · <span>1위(100%)</span> 개봉 · <span>1일전</span> 누적 관객 · <span>1억명</span></div> */}
              <div className='posterTitle'>{movieHeaderData?.name}</div>
              {/* <div className='posterTitle'>바닐라스카이</div> */}

              {/* <div className='posterTitleDetail'>{movieHeaderData?.genre[0].name}</div> */}

              {/* <div className='posterTitleDetail'>2001 · 스릴러 · SF</div> */}
              <div className='posterRating'>
                {/* 이 부분 처리 어떻게?? 수희님한테 질문 */}
                {/* <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />{movieHeaderData.comments[0].starPoint}(3292명)</div> */}
                {/* <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />5.0(3292명)</div> */}
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIconWrapper'><FontAwesomeIcon className='plusIcon' icon={faPlus} /></div>
                      <div className='wantToSee' onClick={this.openWantToSee} >보고싶어요</div>
                    </button>
                    <button className='modalBtnWrapper'>
                      <div className='modalBtn'>▾</div>
                    </button>
                  </div>
                  <div className='starRatingBox'>
                    <div className='ratingTitle'>평가하기</div>
                    {/* 별점 부분 연결 어떻게?? 질문 */}
                    <StarRating mouseEnterEvent={this.mouseEnterEvent} mouseLeaveEvent={this.mouseLeaveEvent} ratingStars={this.ratingStars} rateStar={rateStar} starHover={starHover} />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isWantToSee ? '' : 'displayNone'}>
          {/* <WantToSee
            // wantToSeeData={movieHeaderData}
            isWantToSee={isWantToSee}
            closeWantToSee={this.closeWantToSee}
          /> */}
        </div>
      </>
    )
  }
}

export default MovieHeader;
