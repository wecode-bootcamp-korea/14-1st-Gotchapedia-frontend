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
    }
  }

  render() {
    let { contentData } = this.props;

    // 리버스가 안 먹는다....
    // contentData = contentData.reverse();
    // console.log(comment[key].comment);
    // console.log(comment[key]);

    // console.log(contentData.comment);


    // 댓글이 추가가 되는데 뒤에 담긴다 reverse? unshift?
    // 새로달린 댓글들 UI가 사라졌다
    return (
      <>
        {/* 댓글값? */}
        {/* {comment} */}

        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img src={contentData.profileImage} alt='작성자아이콘' />
              <div className='writerId'>{contentData.writerId}
                <div className='writerIcon'></div>
              </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {contentData.starRating}
            </div>
          </div>
          <div className='commentContent'>
            <p>
              {contentData.comment}
            </p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {contentData.thumbsup}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {contentData.countComment}
            </div>
          </div>
          <div className='like'>좋아요</div>
        </div>
      </>  
    )
  }
}

export default CommentBox;