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
          <div className='crudProfileName'>
            {commentContent.commentorName}
          </div>
          <div className='commentBox'>
            {commentContent.comment } 
          </div>
        </div>
        <div className='commentCrudRight'>
          <div className='commentCrudDelete'>
            <FontAwesomeIcon className='commentDeleteIcon' onClick={deleteComment} icon={faTrashAlt} />
          </div>
          <div className='commentCrudUpdate'>
            <FontAwesomeIcon className='commentUpdateIcon' icon={faPencilAlt} />
          </div>
        </div>
      </div>
    )
  }
}

export default ShowComment;


// {commentList[0].comment}