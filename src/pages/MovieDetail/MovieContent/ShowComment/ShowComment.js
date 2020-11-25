import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './showComment.scss';

class ShowComment extends Component {

  render() {
    const { commentList, deleteComment } = this.props;
    
    // console.log(commentList);
    const commentContent = commentList[0];

    return (
      <div className='commentCrudWrapper'>
        <div className='commentCrudLeft'>
          <img className='crudProfileImage' src={commentContent.commentorImage} alt='댓글수정삭제프로필' ></img>
          {commentContent.commentorId}
          <div className='commentBox'>
            {commentContent.comment } 
          </div>
        </div>
        <div className='commentCrudRight'>
          <div className='commentCrudDelete'>
            <FontAwesomeIcon className='commentDeleteIcon' onClick={deleteComment} icon={faTrashAlt} />
            <button className='deleteBtn' >삭제</button>
          </div>
          <div className='commentCrudUpdate'>
          <FontAwesomeIcon className='commentUpdateIcon' icon={faPencilAlt} />
            <button className='updateBtn'>수정</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowComment;


// {commentList[0].comment}