import React, { Component } from 'react';
import './CommentDetailBox.scss';
import AddComment from '../../AddComment/AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class CommentDetailBox extends Component {
  render() {
    const { commentDetailBoxData, newCommentArr, handleComment, enterAddEvent } = this.props;

    return (
    <div>
      {commentDetailBoxData.map((el, idx) => {
        return (
        <div style={{width: "600px"}}>
          <div key={idx} className='commentBox'>
            <div className='commentTitle'>
              <div className='titleLeft'>
                <img src={el?.comments[idx].commentorImage} alt='작성자아이콘'></img>
                <div className='writerId'>{el?.comments[idx].commentorName}
                  <div className='writerIcon'></div>
                </div>
              </div>
              <div className='titleRight'>
                <FontAwesomeIcon className='writerStar' icon={faStar} />
                {el?.comments[idx].starPoint}
              </div>
            </div>
            <div className='commentContent'>
              <p>
                {/* 기존 코멘트 */}
                {el?.comments[idx].comment}
              </p>

              {Number(el?.comments[idx].commentId) === Number(idx) ? <AddComment comments={newCommentArr} handleComment={this.handleComment} enterAddEvent={this.enterAddEvent}/> : ''}
            </div>
            <div className='commentIcons'>
              <div className='thumbsUpWrapper'>
                <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                {el?.comments[idx].thumbsup}
              </div>
              <div className='commentWrapper'>
                <FontAwesomeIcon className='commentIcon' icon={faComment} />
                {el.comments[idx].countComment}
              </div>
            </div>
            <div className='like'>좋아요</div>
            <div className='inputCommentWrapper'>
            <input onChange={handleComment} onKeyUp={enterAddEvent} name='inputComment' placeholder='댓글을 입력하세요'></input>
            {/* 현재 댓글 추가시 전체로 나와서 각각 컴포넌트 별로 나오도록 수정중.. 위스타그램 좋아요, 댓글추가 참고할 것 */}
            {/* 지금 map 안에 또 map이라 구조가 약간 복잡함 */}
            
            {/* 이렇게 하면 댓글이 다른데까지 다 나옴 */}
            {/* {newCommentArr.map((element, index) => {
              return (
                <AddComment index={index} comments={element}/>
              )
            })} */}
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

