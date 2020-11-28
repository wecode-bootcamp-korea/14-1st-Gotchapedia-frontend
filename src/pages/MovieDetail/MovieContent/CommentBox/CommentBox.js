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
    };
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    });
  };

  componentDidMount() {
    fetch(`${SERVER}/movies/${this.props.id}/comment/${this.props.commentId}`, {
      headers: {
        Authorization: MOVIEDETAIL_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movieDetailData: res.data });
      });
  }

  render() {
    const { commentContent, commentList, contentData } = this.props;
    let cnt = Number(commentContent.likeCount);
    const { isLike } = this.state;

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img src='/images/defaultProfile.png' alt='작성자아이콘' />
              <div className='writerId'>
                {contentData.writerId}
                <div className='writerIcon'></div>
              </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {contentData.rating}
            </div>
          </div>
          <div className='commentContent'>
            <p>{contentData.desc}</p>
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
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              {/* src를 못 읽어서 하드코딩 해둠 */}
              <img src='/images/defaultProfile.png' alt='작성자아이콘' />
              <div className='commentorId'>{commentContent.userName} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='writerStar' icon={faStar} />
              {commentContent.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>{commentContent.content}</p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? (cnt += 1) : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {commentContent.replyCount}
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
