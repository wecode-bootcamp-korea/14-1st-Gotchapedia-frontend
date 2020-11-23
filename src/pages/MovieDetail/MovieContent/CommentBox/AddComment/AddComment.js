import React, { Component } from 'react';
import './AddComment.scss';

class AddComment extends Component {


  render() {
    const { comments } = this.props;

    return(
      <>
        <div className='commentAdd'>
          {comments?.map((element) => {
            return (
              <div className='newComment'>{element.comment}</div>
            )
          })}
        </div>
      </>
    )
  }
}

export default AddComment;
