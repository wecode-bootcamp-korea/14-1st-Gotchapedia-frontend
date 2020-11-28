import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './CommentBox.scss';
import { MOVIEDETAIL_TOKEN, SERVER } from '../../../../config';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      thumbsUpCount: '',
      commentBoxData: [],
    };
  }

  likeEvent = (cnt) => {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike,
    });
  };

  // componentDidMount() {
  //   fetch(`${SERVER}/movies/${this.props.id}/comment/${this.props.commentId}`, {
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({ movieDetailData: res.data });
  //     });
  // }
  
  // componentDidMount() {
  //   fetch(`${SERVER}/movies/${this.props.movieId}/comments`, {
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // this.setState({
  //       //   commentBoxData: res
  //       // })
  //     })
  // }

  render() {
    const { commentBoxData, commentList, movieId } = this.props;
    let cnt = Number(commentList.likeCount);
    const { isLike } = this.state;

    return (
      <>
        <div className='commentBox'>
          <div className='commentTitle'>
            <div className='titleLeft'>
               {/* 이거 왜 이미지가 안 나오지??  */}
              <img className='commentorImage' src='/images/chorong2.png' alt='작성자아이콘' />
              <div className='commentorId'>{commentList.userName} </div>
            </div>
            <div className='titleRight'>
              <FontAwesomeIcon className='commentorStar' icon={faStar} />
              {commentList.starPoint}
            </div>
          </div>
          <div className='commentContent'>
            <p>{commentList.content}</p>
          </div>
          <div className='commentIcons'>
            <div className='thumbsUpWrapper'>
              <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
              {isLike ? (cnt += 1) : cnt}
            </div>
            <div className='commentWrapper'>
              <FontAwesomeIcon className='commentIcon' icon={faComment} />
              {commentList.replyCount}
            </div>
          </div>
          <div className='likeEventContainer'>
            <div
              className={isLike ? 'pushedLike' : 'unpushedLike'}
              onClick={this.likeEvent}>
              좋아요
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CommentBox;
