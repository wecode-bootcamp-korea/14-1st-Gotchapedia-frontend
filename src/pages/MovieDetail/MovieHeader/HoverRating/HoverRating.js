import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './hoverRating.scss';
import { SERVER, PREFERRED_TOKEN } from '../../../../config';

const labels = {
  0: '평가하기',
  0.5: '최악이에요',
  1: '싫어요',
  1.5: '재미없어요',
  2: '별로에요',
  2.5: '부족해요',
  3: '보통이에요',
  3.5: '볼만해요',
  4: '재미있어요',
  4.5: '훌륭해요!',
  5: '최고에요! 와!',
};

class HoverRating extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      hover: -1
    }
  }

  sendStar = () => {
    const { value, hover } = this.state;

    fetch(`${SERVER}/analysis/star`, {
      method: "POST",
      headers: {  
        Authorization: PREFERRED_TOKEN,
      },
      body: JSON.stringify({
        movieId: this.props.movieId,
        starPoint: this.state.value
      }),
    })
  }

  render() {
    const { value, hover } = this.state;
    const { movieId, starPoint } = this.props;

    return (
      <div className='hoverRatingWrapper'>
        <div className='hoverRating'>
          {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
            this.setState({value : newValue});
            }}
            onChangeActive={(event, newHover) => {
            this.setState({hover: newHover});
            }}
            onClick={this.sendStar}
          />
        </div>
      </div>
    )
  }
}

export default HoverRating;