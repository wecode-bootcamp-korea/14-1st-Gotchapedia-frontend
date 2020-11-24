import React, { Component } from 'react';
import './AddComment.scss';

class AddComment extends Component {


  render() {
    const { addedNewComments } = this.props;

    return(
      <div className='commentAdd'>
        {addedNewComments.map((newComments) => {
          return (
            <div key={newComments.id} className='newComment'>{newComments.newComment}</div>
          )
        })}
      </div>
    )
  }
}

export default AddComment;
