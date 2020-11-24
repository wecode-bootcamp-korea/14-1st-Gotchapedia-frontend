import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


class ShowComment extends Component {

  render() {
    const { commentList } = this.props;
    // const newcomment = commentList.splice(0,1);
    // console.log(commentList);
    const commentContent = commentList[0];

    return (
      <div className='commentCrudWrapper'>
            <div className='commentCrudLeft'>
              {/* <img className='crudProfileImage' alt='댓글수정삭제프로필'>{commentContent.commentorImage}</img> */}
              {commentContent.commentorName}
            </div> 
            <button onClick={this.openModalComment} >코멘트 남기기</button>
            <div className='commentCrudRight'>
              <div className='commentCrudDelete'>
                <FontAwesomeIcon className='commentDeleteIcon' icon={faTrashAlt} />
                삭제
              </div>
              <div className='commentCrudUpdate'>
              <FontAwesomeIcon className='commentUpdateIcon' icon={faPencilAlt} />
                수정
              </div>
            </div>
            {commentContent.comment} 
      </div>
    )
  }
}

export default ShowComment;


// {commentList[0].comment}