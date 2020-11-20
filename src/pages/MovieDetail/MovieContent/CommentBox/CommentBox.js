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
    const { contentData } = this.props;

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img src={contentData.profile} alt='작성자아이콘' />
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
              {contentData.desc}
            </p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {contentData.thumbsup}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {contentData.comment}
            </div>
          </div>
          <div className='like'>좋아요</div>
        </div>
      </>  
    )
  }
}

export default CommentBox;