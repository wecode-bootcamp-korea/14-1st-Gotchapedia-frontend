import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../../../components/Nav/Nav';
import CommentDetailBox from './CommentDetailBox/CommentDetailBox';
import './CommentDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { COMMENT_API, COMMENT_TOKEN } from '../../../../../config';

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    }
  }

  componentDidMount() {
    fetch('http://3.35.216.109:8000/comment/list/23', {
      headers: {
        Authorization: COMMENT_TOKEN,
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        commentList: res.data
      })
    })
  }

  goToMovieDetail = () => {
    this.props.history.push(`/movies/${this.props.id}`);
  }

  render() {
    const { commentList, newCommentArr } = this.state;

    return (
      <>
        <Nav />
        <div className='detailHeading'>
          <FontAwesomeIcon className='headingArrow' onClick={this.goToMovieDetail} icon={faArrowLeft} />
          <div className='headingTitle'>코멘트</div>
        </div>      
        <div className='commentBoxWrapper'>
          <CommentDetailBox handleComment={this.handleComment} enterAddEvent={this.enterAddEvent} commentDetailBoxData={commentList} newCommentArr={newCommentArr}/>
        </div>
      </>
    )
  }
}

export default withRouter(CommentDetail);