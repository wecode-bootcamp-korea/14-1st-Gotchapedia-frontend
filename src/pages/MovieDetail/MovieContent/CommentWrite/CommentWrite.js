import React, { Component } from 'react';
import './CommentWrite.scss';

class CommentWrite extends Component {
  constructor() {
    super();
    this.state = ({
      isColor: false,
      commentString: '',
      commentArray: [],
    })
    
  }

  handleChange = (e) => {

    console.log(e.target.value);
    e.target.value ? this.setState({
      isColor: true,
      commentString: e.target.value
    }) : this.setState({
      isColor: false,
    })
  }

  addComment = (e) => {
    e.preventDefault();
    const { commentString, commentArray } = this.state;
    
    const written_time = Date.now();
    const obj = {
      // 일단 임시로 글을 쓴 시간이 id
      id: written_time,
      comment: commentString,
    };
    
    this.setState({
      commentArray: [...commentArray, obj],
    })
  }
  
  render() {
    const { isColor, commentArray } = this.state;
    const { closeModalComment } = this.props;
    // console.log(this.state.commentString);
    console.log(commentArray);

    // 이 담긴 데이터를 어떻게 띄우지???

    return(
      <div className='CommentWrite' onClick={closeModalComment}>
        <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
          <div className='commentHeading'>
            <div className='headingX' onClick={closeModalComment}>X</div>
            <div className='headingTitle'>바닐라스카이</div>
            {/* 'headingComment' */}
            <div className={isColor ? 'coloredHeadingComment' : 'headingComment'} onClick={this.addComment}>코멘트 작성</div>
          </div>
          <form onSubmit
            action='/movie-detail'
            method='post'
            // onSubmit={function(e) {
            //   e.preventDefault();
            //   this.p
            // }}
          >
            
          </form>
          <div className='commentContent'>
            <input className='writeComment' placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.' onChange={this.handleChange} ></input>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentWrite;