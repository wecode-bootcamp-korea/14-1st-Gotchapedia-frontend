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
    }
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    })
  }


  render() {
    const { commentData } = this.props;
    let cnt = Number(this.props.commentData.thumbsup);
    const { isLike } = this.state;

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              {/* src를 못 읽어서 하드코딩 해둠 */}
              {/* <img src={commentData.commentorImage} alt='작성자아이콘' /> */}
              <img src='/images/chorong2.png' alt='작성자아이콘' />
              <div className='commentorId'>{commentData.commentorId} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {commentData.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>
              {commentData.comment}
            </p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? cnt += 1 : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {commentData.countComment}
            </div>
          </div>
          <div className='likeEventContainer'>
            <div className={isLike ? 'pushedLike' : 'unpushedLike'} onClick={this.likeEvent}>좋아요</div>
          </div>        
        </div>
      </>  
    )
  }
}

export default CommentBox;