import React, { Component } from 'react';
import './CommentWrite.scss';

class CommentWrite extends Component {
  constructor() {
    super();
    this.state = ({
      isColor: false,
    })
    
  }

  changeColor = (e) => {
    console.log(e.target.value);
    e.target.value ? this.setState({
      isColor: true,
    }) : this.setState({
      isColor: false,
    })
  }
  
  render() {
    const { isColor } = this.state;
    const { closeModalComment } = this.props;

    return(
      <div className='CommentWrite' onClick={closeModalComment}>
        <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
          <div className='commentHeading'>
            <div className='headingX' onClick={closeModalComment}>X</div>
            <div className='headingTitle'>바닐라스카이</div>
            <div className={isColor ? 'coloredHeadingComment' : 'headingComment'}>코멘트 작성</div>
          </div>
          <div className='commentContent'>
            <input className='writeComment' placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.' onChange={this.changeColor} ></input>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentWrite;