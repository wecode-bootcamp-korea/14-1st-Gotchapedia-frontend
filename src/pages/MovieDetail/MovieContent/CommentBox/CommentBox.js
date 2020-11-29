import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './CommentBox.scss';

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
    const { commentList } = this.props;
    let likeCount = Number(commentList.likeCount);
    const { isLike } = this.state;
    
    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img className='commentorImage' src='/images/defaultProfile.png' alt='작성자아이콘' />
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
