import React, { Component } from 'react';
import 'pages/MovieDetail/MovieContent/CommentWrite/CommentWrite.scss';

class CommentWrite extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      commentWriteData,
      closeModalComment,
      addComment,
      updateComment,
      handleWriteChange,
      handleUpdateChange,
      isColor,
      isEditted,
    } = this.props;

    return (
      <div className='CommentWrite' onClick={closeModalComment}>
        <div className='modalContainer' onClick={e => e.stopPropagation()}>
          <div className='commentHeading'>
            <div className='headingX' onClick={closeModalComment}>
              X
            </div>
            <div className='headingTitle'>{commentWriteData[0]?.name}</div>
            <div
              className={isColor ? 'coloredHeadingComment' : 'headingComment'}
              onClick={addComment}
            >
              코멘트 작성
            </div>
          </div>
          <div className='commentContent'>
            <input
              className='writeComment'
              placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
              onChange={handleWriteChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentWrite;
