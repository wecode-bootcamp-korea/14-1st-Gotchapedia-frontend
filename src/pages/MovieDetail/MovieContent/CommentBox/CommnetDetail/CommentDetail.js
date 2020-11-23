import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../../../components/Nav/Nav';
import CommentDetailBox from './CommentDetailBox/CommentDetailBox';
import './CommentDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      contentData: [],
      newCommentStr: '',
      newCommentArr: [],
    }
  }

  componentDidMount() {
    fetch("/Data/contentdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        contentData: res.data,
      })
    })
  }

  goToMovieDetail = () => {
    this.props.history.push("/movie-detail");
  }

  handleComment = (e) => {
    this.setState({
      newCommentStr: e.target.value,
    })
  } 

  enterAddEvent = (e) => {
    const { newCommentStr, newCommentArr } = this.state;
    e.preventDefault();

    if(e.keyCode === 13) {
      const obj = {
        id: e.target.id,
        comment: newCommentStr
      }

      this.setState({
        newCommentArr: [...newCommentArr, obj]
      })
    }
  }

  render() {
    const { contentData, newCommentArr } = this.state;

    return (
      <>
        <Nav />
        <div className='detailHeading'>
          <FontAwesomeIcon className='headingArrow' onClick={this.goToMovieDetail} icon={faArrowLeft} />
          <div className='headingTitle'>코멘트</div>
        </div>      
        <div className='commentBoxWrapper'>
          <CommentDetailBox handleComment={this.handleComment} enterAddEvent={this.enterAddEvent} commentDetailBoxData={contentData} newCommentArr={newCommentArr}/>
        </div>
      </>
    )
  }
}

export default withRouter(CommentDetail);