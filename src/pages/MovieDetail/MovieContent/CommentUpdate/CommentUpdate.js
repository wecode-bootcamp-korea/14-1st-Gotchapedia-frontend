import React, { Component } from 'react';
import 'pages/MovieDetail/MovieContent/CommentUpdate/commentUpdate.scss';

class CommentUpdate extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      commentUpdateData,
      closeModalComment,
      updateComment,
      handleUpdateChange,
      isColor,
      commentString,
    } = this.props;

    return (
      <div className='CommentUpdate' onClick={closeModalComment}>
        <div className='modalContainer' onClick={e => e.stopPropagation()}>
          <div className='commentHeading'>
            <div className='headingX' onClick={closeModalComment}>
              X
            </div>
            <div className='headingTitle'>{commentUpdateData[0]?.name}</div>
            <div
              className={isColor ? 'coloredHeadingComment' : 'headingComment'}
              onClick={updateComment}
            >
              코멘트 수정
            </div>
          </div>
          <div className='commentContent'>
            <input
              className='UpdateComment'
              placeholder={commentString}
              onChange={handleUpdateChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentUpdate;
