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
    const { commentData, id } = this.props;
    let cnt = Number(commentData?.comments[id].thumbsup);
    const comments = commentData.comments;

    const { isLike } = this.state;

    // console.log(commentData);

    // 키가 왜 언디파인드 뜨는지 모르겠다
    // console.log(key);

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              {/* src를 못 읽어서 하드코딩 해둠 */}
              <img src={comments && comments[id]?.commentorImage} alt='작성자아이콘' />
              <div className='commentorId'>{comments && comments[id]?.commentorName} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {comments && comments[id]?.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>
              {comments && comments[id]?.comment}
            </p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? cnt += 1 : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {comments && comments[id]?.countComment}
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