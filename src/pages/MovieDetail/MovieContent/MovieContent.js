import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import CastingList from './CastingList/CastingList';
import CommentBox from './CommentBox/CommentBox';
import CommentWrite from './CommentWrite/CommentWrite';
import './movieContent.scss';

class MovieContent extends Component {
  constructor() {
    super();
    this.state = {
      contentData: [],
      isComment: false,
      commentString: '',
      commentArray: [],
      isColor: false,
      commentorId: "",
      castingImage: "",
      starRating: "",
      thumbsUp: "",
      countComment: "",
    }
  };

  handleChange = (e) => {
    if(e.target.value) {
      this.setState({
        commentString: e.target.value,
        isColor: true,
      })
    } else {
      this.setState({
        isColor: false,
      })
    }
  }
  
  addComment = (e) => {
    const { commentString, contentData } = this.state;
    const ran = Math.floor(Math.random() * 7)
    e.preventDefault();
    const written_time = Date.now();
    const obj = {
      id: written_time,
      comment: commentString,
      commentorId: contentData[ran].commentorId,
      // 별점 반영부분 수정필요
      // starPoint: contentData[ran].starPoint,
      starPoint: '5.0',
      commentorImage: contentData[ran].commentorImage,
      thumbsup: contentData[ran].thumbsup,
      countComment: contentData[ran].countComment,
    }

    this.setState({
      contentData: [obj, ...contentData],
    })
    
    this.closeModalComment();
  }

  goToCommentDetail = () => {
    this.props.history.push("/movie-detail/comments");
  }

  goToOverview = () => {
    this.props.history.push("/movie-detail/overview");
  }

  openModalComment = () => {
    this.setState({
      isComment: true,
    })
  }

  closeModalComment = () => {
    this.setState({
      isComment: false,
    })
  }

  render() {
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    const { contentData, isComment } = this.state;

    const { movieContentData } = this.props;

    console.log(movieContentData);
    
    return (
      <>
        <div className='MovieContent'>
          {/* 얘는 별점줄때 display가 보이도록 설정*/}
          <div className='hiddenComment'>
            <div className='commentSuggestion'>대단한 작품이군요! 김태현태김 님의 감동을 글로 남겨보세요</div>
            <button onClick={this.openModalComment} >코멘트 남기기</button>
          </div>
          <div className='movieContentBox'>
            <div className='predictStar'>
              {/* 여기 있는것도 있고 없는것도 있음 날리나? */}
              <div className='predictHeading'>내가 좋아할 이유</div>
              {/* 이 부분 연관 영화 떠야되는데 처리 어떻게?? */}
              <div className='predictContent'><p>재밌게 본 비슷한 작품</p><div>아키라<img src='/images/akiraHeaderImage.jpg' alt='연관영화'></img></div></div>
            </div>
            <div className='normalInfo'>
              <div className='infoHeading' onClick={this.goToOverview} >기본 정보<span>더보기</span></div>
              <div className='infoContent'>
                <div className='contentHeading'>{movieContentData[0]?.name}</div>
                <div className='contentInfo'>{movieContentData[0]?.genre}</div>
                <div className='contentTime'>{movieContentData[0]?.showTime} 분</div>
                <div className='detailContent'>{movieContentData[0]?.description}</div>
              </div>
            </div>
            <div className='castingWrapper'>                                                                                                                   
              <div className='castingHeading'>출연/제작</div>
              <div className='castingContent'>
                {/* {contentData && <CastingList castingListData={movieContentData}/>} */}
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
                {/* <Slider {...settings}>
                    {movieContentData && movieContentData?.map((el, idx) => {
                      return (
                        <CommentBox
                          key={movieContentData && idx}
                          commentData={movieContentData && el}
                        />
                      )
                    })}
                </Slider> */}
              </div>
            </div>
          </div>
        </div>
        <div className={isComment ? '' : 'displayNone'}>
          <CommentWrite
            commentWriteData={contentData && contentData}
            handleChange={this.handleChange}
            addComment={this.addComment}
            isColor={this.state.isColor}
            isComment={isComment}
            closeModalComment={this.closeModalComment}
          />
        </div>
      </>
    )
  }
}

export default withRouter(MovieContent);
