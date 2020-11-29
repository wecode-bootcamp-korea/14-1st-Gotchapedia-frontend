import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './CommentBox.scss';
import { MOVIEDETAIL_TOKEN, SERVER } from '../../../../config';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      thumbsUpCount: '',
      commentBoxData: [],
    };
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    });
  };

  render() {
    const { commentBoxData, commentList, movieId } = this.props;
    let likeCount = Number(commentList.likeCount);
    const { isLike } = this.state;

    // 얘는 바뀐거 댓글리스트 뿌려주기만 하는앤데 함수를 줄 필요가 없지
    
    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img className='commentorImage' src={commentList.userImage} alt='작성자아이콘' />
              <div className='commentorId'>{commentList.userName} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='commentorStar' icon={faStar} />
              {commentList.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>{commentList.content}</p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? (likeCount += 1) : likeCount}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {commentList.replyCount}
            </div>
          </div>
          <div className='likeEventContainer'>
            <div
              className={isLike ? 'pushedLike' : 'unpushedLike'}
              onClick={this.likeEvent}>
              좋아요
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CommentBox;
