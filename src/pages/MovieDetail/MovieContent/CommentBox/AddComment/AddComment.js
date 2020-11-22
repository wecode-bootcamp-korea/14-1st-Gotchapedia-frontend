import React, { Component } from 'react';
import './AddComment.scss';

class AddComment extends Component {


  render() {
    const { comments, handleComment, enterAddEvent } = this.props;
    // 지금 단체로 댓글이 뜸, 개별적으로 안뜸, 컴포넌트 분리시켰는데
    // console.log(comments index);
    return(
      <>
        <div className='commentAdd'>
          {comments.map((element, index) => {
            return (
              <div className={index}>{element.comment}</div>
            )
          })}
        </div>
      </>
    )
  }
}

export default AddComment;

// {newCommentArr.map((element, index) => {
//   return (
//     <AddComment index={index} comments={element}/>
//   )
// })}