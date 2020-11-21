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
      // cnt: 1,
    }
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    // let likeCount = this.props.contentData.thumbsup;
    // likeCount = Number(likeCount) + Number(cnt);
    // console.log(likeCount);
     
      this.setState({
        isLike: !isLike,
      })
  }


  render() {
    const { contentData, } = this.props;
    let cnt = Number(this.props.contentData.thumbsup);
    const { isLike } = this.state;
    // 리버스가 안 먹는다....
    // contentData = contentData.reverse();
    // console.log(comment[key].comment);
    // console.log(comment[key]);

    // console.log(contentData.comment);


    // 댓글이 추가가 되는데 뒤에 담긴다 reverse? unshift?
    // 새로달린 댓글들 UI가 사라졌다

    console.log(cnt);
    return (
      <>
        {/* 댓글값? */}
        {/* {comment} */}

        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
              <img src={contentData.castingImage} alt='작성자아이콘' />
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
              {isLike ? cnt += 1 : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {contentData.countComment}
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