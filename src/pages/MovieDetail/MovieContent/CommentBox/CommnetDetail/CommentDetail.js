import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Nav from '../../../../../components/Nav/Nav';
import './CommentDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
import CommentBox from '../CommentBox';

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      commentData: [],
    }
  }

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

  goToMovieDetail = () => {
    this.props.history.push('/movie-detail/');
  }

  render() {
    const { contentData } = this.state;

    return (
      <>
        <Nav />
        <div className='detailHeading'>
          <FontAwesomeIcon className='headingArrow' icon={faArrowLeft} onClick={this.goToMovieDetail} />
          <div className='headingTitle'>코멘트</div>
        </div>      
        <div className='commentBoxWrapper'>
          {contentData && contentData.map((el, idx) => {
            return (
            <CommentBox contentData={el}/>

              // <div key={idx} className='commentBox'>
              //   <div className='commentTitle'>
              //     <div className='titleLeft'>
              //       {/* 왜 castingImage는 되고 profileImage는 안되냐?? CommentDetail과 CommentBox가 같아야 하는데 */}
              //       {/* 댓글 컴포넌트가 같아야 자동으로 연결되지 않을까?? */}
              //       <img className='writerProfile' src={el.castingImage} alt='작성자아이콘'></img>
              //       <div className='writerId'>{el.writerId}
              //         <div className='writerIcon'></div>
              //       </div>
              //     </div>
              //     <div className='titleRight'>
              //       <FontAwesomeIcon className='writerStar' icon={faStar} />
              //       {el.starRating}
              //     </div>
              //   </div>
              //   <div className='commentContent'>
              //     <p>
              //       {el.commentDescription}
              //     </p>
              //   </div>
              //   <div className='commentIcons'>
              //     <div className='thumbsUpWrapper'>
              //       <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              //       {el.thumbsup}
              //     </div>
              //     <div className='commentWrapper'>
              //       <FontAwesomeIcon className='commentIcon' icon={faComment} />
              //       {el.comment}
              //     </div>
              //   </div>
              //   <div className='like'>좋아요</div>
              // </div>       
            )
          })}
        </div>
      </>
    )
  }
}

export default withRouter(CommentDetail);