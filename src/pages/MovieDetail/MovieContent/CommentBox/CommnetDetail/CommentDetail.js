import React, { Component } from 'react';
import Nav from '../../../../../components/Nav/Nav';
import './CommentDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
// import CommentBox from '../CommentBox';

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      commentData: [],
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

  render() {
    const { contentData } = this.state;

    return (
      <>
        <Nav />
        <div className='commentHeading'>
          <FontAwesomeIcon className='headingArrow' icon={faArrowLeft} />
          <div className='headingTitle'>코멘트</div>
        </div>      
        <div className='commentBoxWrapper'>
          {contentData && contentData.map((el, idx) => {
            return (
              <div key={idx} className='commentBox'>
                <div className='commentTitle'>
                  <div className='titleLeft'>
                    <img src={el.image} alt='작성자아이콘'></img>
                    <div className='writerId'>{el.writerId}
                      <div className='writerIcon'></div>
                    </div>
                  </div>
                  <div className='titleRight'>
                    <FontAwesomeIcon className='writerStar' icon={faStar} />
                    {el.rating}
                  </div>
                </div>
                <div className='commentContent'>
                  <p>
                    {el.desc}
                  </p>
                </div>
                <div className='commentIcons'>
                  <div className='thumbsUpWrapper'>
                    <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                    {el.thumbsup}
                  </div>
                  <div className='commentWrapper'>
                    <FontAwesomeIcon className='commentIcon' icon={faComment} />
                    {el.comment}
                  </div>
                </div>
                <div className='like'>좋아요</div>
              </div>              
            )
          })}
        </div>
      </>
    )
  }
}

export default CommentDetail;