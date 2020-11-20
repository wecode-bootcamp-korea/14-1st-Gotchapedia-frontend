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
    const { contentData, comment, key } = this.props;

    // console.log(comment[key].comment);
    // console.log(comment[key]);

    // console.log(contentData.comment);

    return (
      <>
        {/* 댓글값? */}
        {/* {comment} */}

        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              {/* <img src={contentData.profile} alt='작성자아이콘' /> */}
              <div className='writerId'>{contentData.writerId}
                <div className='writerIcon'></div>
              </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {contentData.rating}
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