import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from "react-slick";
// import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

import CastingList from './CastingList/CastingList';
import CommentBox from './CommentBox/CommentBox';
import './movieContent.scss';

class MovieContent extends Component {
  constructor() {
    super();
    this.state = {
      contentData: [],
    }
  };



  componentDidMount() {
    fetch("/Data/contentdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        contentData: res.data,
      })
    })
  }

  goToCommentDetail = () => {
    this.props.history.push("/movie-detail/comments");
  }

  goToOverview = () => {
    this.props.history.push("/movie-detail/overview");

  }
  
  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    const { contentData } = this.state;
    return (
        <div className='MovieContent'>
          {/* 얘는 별점줄때 display가 보이도록 설정*/}
          <div className='hiddenComment'>
            <div className='commentSuggestion'>대단한 작품이군요! 김태현태김 님의 감동을 글로 남겨보세요</div>
            <button>코멘트 남기기</button>
          </div>
          <div className='movieContentBox'>
            <div className='predictStar'>
              <div className='predictHeading'>내 예상별점</div>
              <div className='predictContent'><p>재밌게 본 비슷한 작품</p><div>사랑에 대한 모든 것<img src='/images/vanilaSkyPoster.jpeg' alt='예상별점 아이콘'></img></div></div>
            </div>
            <div className='normalInfo'>
              <div className='infoHeading' onClick={this.goToOverview} >기본 정보<span>더보기</span></div>
              <div className='infoContent'>
                <div className='contentHeading'>Radioactive</div>
                <div className='contentInfo'>2019 · 영국 · 드라마</div>
                <div className='contentTime'>1시간 43분</div>
                <div className='detailContent'>새로운 세상을 만든 천재 과학자 그녀의 빛나는 도전과 숨겨진 이야기! 뛰어난 연구 실적에도 불구하고 거침없는 성격 때문에 연구실에서 쫓겨난 과학자 ‘마리’. 평소 그녀의 연구를 눈여겨본 ‘피에르’는 공동 연구를 제안하고, 두 사람은 자연스럽게 사랑...</div>
              </div>
            </div>
            <div className='castingWrapper'>                                                                                                                   
              <div className='castingHeading'>출연/제작</div>
              <div className='castingContent'>
                {contentData && <CastingList contentData={contentData}/>}
              </div>
            </div>
            <div className='commentWrapper'>
              <div className='commentHeading'>
                <div className='headingLeft'>
                  코멘트 <span>10+</span>
                </div> 
                <span onClick={this.goToCommentDetail}>더보기</span>
              </div>
              <div className='commentBoxWrapper'>
                <Slider {...settings}>
                    {contentData.map((el, idx) => {
                      return (
                        <CommentBox key={idx} contentData={el} />
                      )
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(MovieContent);
