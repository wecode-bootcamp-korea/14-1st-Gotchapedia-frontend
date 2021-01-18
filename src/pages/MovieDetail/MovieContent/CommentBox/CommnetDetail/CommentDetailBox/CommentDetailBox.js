import React, { Component } from 'react';
import 'pages/MovieDetail/MovieContent/CommentBox/CommnetDetail/CommentDetailBox/CommentDetailBox.scss';
import AddComment from 'pages/MovieDetail/MovieContent/CommentBox/AddComment/AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class CommentDetailBox extends Component {
  constructor() {
    super();
    this.state = {
      newCommentStr: '',
      newCommentArr: [],
    };
  }

  handleComment = e => {
    this.setState({
      newCommentStr: e.target.value,
    });
  };

  enterAddEvent = e => {
    const { newCommentStr, newCommentArr } = this.state;
    e.preventDefault();

    if (e.keyCode === 13) {
      const obj = {
        id: e.target.id,
        comment: newCommentStr,
      };

      this.setState({
        newCommentArr: [...newCommentArr, obj],
      });
    }
  };

  render() {
    const { commentDetailBoxData } = this.props;
    const { newCommentArr } = this.state;

    return (
      <div>
        {commentDetailBoxData &&
          commentDetailBoxData.map(cmt => {
            return (
              <div key={cmt.commentId} style={{ width: '600px' }}>
                <div style={{ margin: '20px 0' }} className='commentBox'>
                  <div className='commentTitle'>
                    <div className='titleLeft'>
                      <img
                        src='/images/defaultProfile.png'
                        alt='작성자아이콘'
                      ></img>
                      <div className='writerId'>
                        {cmt?.userName}
                        <div className='writerIcon'></div>
                      </div>
                    </div>
                    <div className='titleRight'>
                      <FontAwesomeIcon className='writerStar' icon={faStar} />
                      {cmt?.starPoint}
                    </div>
                  </div>
                  <div className='commentContent'>
                    <p>{cmt?.content}</p>
                  </div>
                  <div className='commentIcons'>
                    <div className='thumbsUpWrapper'>
                      <FontAwesomeIcon
                        className='thumsUpIcon'
                        icon={faThumbsUp}
                      />
                      {cmt?.likeCount}
                    </div>
                    <div className='commentWrapper'>
                      <FontAwesomeIcon
                        className='commentIcon'
                        icon={faComment}
                      />
                      {cmt?.replyCount}
                    </div>
                  </div>
                  <div className='like'>좋아요</div>
                  <div className='inputCommentWrapper'>
                    <input
                      id={cmt?.id}
                      onChange={this.handleComment}
                      onKeyUp={this.enterAddEvent}
                      name='inputComment'
                      placeholder='댓글을 입력하세요'
                    ></input>
                  </div>
                </div>
                <AddComment
                  addedNewComments={newCommentArr.filter(
                    comment => comment.id === cmt.id
                  )}
                  handleComment={this.handleComment}
                  enterAddEvent={this.enterAddEvent}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default CommentDetailBox;
