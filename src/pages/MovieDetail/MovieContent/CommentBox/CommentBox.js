import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
// import Slider from "react-slick";
import './CommentBox.scss';

// import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

// 이 부분은 화살표 커스텀
// const NextArrow = ({onClick})=>{
//   return (<div onClick={onClick} style={{backgroundColor:'#fff', border:'1px solid rgb(249,249,249)', width:'34px', height:'34px', borderRadius:'50%', fontSize:'34px', fontWeight:'normal', color:'black', position:'absolute', right:'10px', top:'80px', zIndex:'12322'}}>
//     {'->'}
//   </div>)
// }

// const PrevArrow = ({onClick})=>{
//   return (<div onClick={onClick} style={{backgroundColor:'#fff', border:'1px solid rgb(249,249,249)', width:'34px', height:'34px', borderRadius:'50%', fontSize:'34px', fontWeight:'normal', color:'black', position:'absolute', left:'10px', top:'80px', zIndex:'12312'}}>
//     {'<-'}
//   </div>)
// }

// 왜 값이 안보이냐고 !!!!!!!!!!!!!!!!!!!

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { contentData } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    // 값은 콘솔에 잘 나옴
    // console.log(contentData);

    // 양식도 맞음 CastingList 그대로 가져다 썼음
    // slider 지우면 또 잘나옴
    return (
      <>
        {/* <Slider {...settings}> */}
          {contentData.map((el, idx) => {
            // 여기도 콘솔 잘 나옴
            // console.log(el);
            return(
              <div key={idx} className='commentBox'>
                <div className='commentTitle'>
                  <div className='titleLeft'>
                    <img src={el.profile} alt='작성자아이콘'></img>
                    <div className='writerId'>{el.writerId}
                      <div className='writerIcon'></div>
                    </div>
                  </div>
                  <div className='titleRight'>
                    <FontAwesomeIcon className='writerStar' icon={faStar} />
                    {el.rating}
                  </div>
                </div>
                <div className='commentContent'>
                  <p>
                    {el.desc}
                  </p>
                </div>
                <div className='commentIcons'>
                  <div className='thumbsUpWrapper'>
                    <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                    {el.thumbsup}
                  </div>
                  <div className='commentWrapper'>
                    <FontAwesomeIcon className='commentIcon' icon={faComment} />
                    {el.comment}
                  </div>
                </div>
                <div className='like'>좋아요</div>
              </div>
            )
          })}
        {/* </Slider> */}
      </>
    )
  }
}

export default CommentBox;