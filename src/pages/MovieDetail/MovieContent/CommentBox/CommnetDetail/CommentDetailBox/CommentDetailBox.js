import React, { Component } from 'react';
import './CommentDetailBox.scss';
import AddComment from '../../AddComment/AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from 'react-icons/fa';

class CommentDetailBox extends Component {

  render() {
    const { commentDetailBoxData, newCommentArr, handleComment, enterAddEvent } = this.props;
    const commentList = commentDetailBoxData[0]?.comments;

    return (
    <div>
      {commentList && commentList.map((cmt) => {
        return (
        <div key={cmt.commentId} style={{width: "600px"}}>
          <div  className='commentBox'>
            <div className='commentTitle'>
              <div className='titleLeft'>
                <img src={cmt?.commentorImage} alt='작성자아이콘'></img>
                <div className='writerId'>{cmt?.commentorName}
                  <div className='writerIcon'></div>
                </div>
              </div>
              <div className='titleRight'>
                <FontAwesomeIcon className='writerStar' icon={faStar} />
                {cmt?.starPoint}
              </div>
            </div>
            <div className='commentContent'>
              <p>
                {/* 기존 코멘트 */}
                {cmt?.comment}
              </p>
              <AddComment
                addedNewComments={newCommentArr.filter((comment) => comment.id === cmt.commentId)} 
                handleComment={this.handleComment} 
                enterAddEvent={this.enterAddEvent}
              />
            </div>
            <div className='commentIcons'>
              <div className='thumbsUpWrapper'>
                <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                {cmt?.thumbsup}
              </div>
              <div className='commentWrapper'>
                <FontAwesomeIcon className='commentIcon' icon={faComment} />
                {cmt?.countComment}
              </div>
            </div>
            <div className='like'>좋아요</div>
            <div className='inputCommentWrapper'>
            <input id={cmt?.commentId} onChange={handleComment} onKeyUp={enterAddEvent} name='inputComment' placeholder='댓글을 입력하세요'></input>
            </div>
          </div>              
        </div>
        )
      })}
    </div>
    )
  }
}

export default CommentDetailBox;

