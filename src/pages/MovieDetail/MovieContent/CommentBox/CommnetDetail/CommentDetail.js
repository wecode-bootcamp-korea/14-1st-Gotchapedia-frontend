import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import CommentDetailBox from 'pages/MovieDetail/MovieContent/CommentBox/CommnetDetail/CommentDetailBox/CommentDetailBox';
import 'pages/MovieDetail/MovieContent/CommentBox/CommnetDetail/commentDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TOKEN, SERVER } from 'config';

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch(`${SERVER}/movies/22/comments`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          commentList: res.data,
        });
      });
  }

  goToMovieDetail = () => {
    this.props.history.push(`/movies/${this.props.match.params.id}`);
  };

  render() {
    const { commentList, newCommentArr } = this.state;

    return (
      <>
        <Nav />
        <div className='detailHeading'>
          <FontAwesomeIcon
            className='headingArrow'
            onClick={this.goToMovieDetail}
            icon={faArrowLeft}
          />
          <div className='headingTitle'>코멘트</div>
        </div>
        <div className='commentBoxWrapper'>
          <CommentDetailBox
            handleComment={this.handleComment}
            enterAddEvent={this.enterAddEvent}
            commentDetailBoxData={commentList}
            newCommentArr={newCommentArr}
          />
        </div>
      </>
    );
  }
}

export default withRouter(CommentDetail);
