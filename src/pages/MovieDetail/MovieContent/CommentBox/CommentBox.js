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
      thumbsUpCount: ''
    }
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    })
  }

  render() {
    const { commentContent } = this.props;
    let cnt = Number(commentContent.likeCount);
    const { isLike } = this.state;

    console.log('commentContent >>>>>>>>>>>>>>>>>>', commentContent);

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              {/* src를 못 읽어서 하드코딩 해둠 */}
              <img src={commentContent.userImage} alt='작성자아이콘' />
              <div className='commentorId'>{commentContent.userName} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {commentContent.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>
              {commentContent.content}
            </p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? cnt += 1 : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {commentContent.replyCount}
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