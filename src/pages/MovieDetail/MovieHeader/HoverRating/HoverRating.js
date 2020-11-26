import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './hoverRating.scss';
import { MOVIEDETAIL_MOCKUP_API, MOVIEDETAIL_SERVER_API, MOVIEDETAIL_TOKEN } from '../../../../config';   

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

// 이름 바꿔도 되나??
class HoverRating extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      hover: -1
    }
  }


  // componentDidMount() {
  //   fetch(`http://10.58.0.152:8000/movie/${this.props.match.params.id}`, {
  //       method: 'POST',
  //       headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ movieDetailData: res.data });
  //     })
  // };

  sendStar = () => {
    const { value, hover } = this.state;
    fetch('http://10.58.0.152:8000/analysis/star', {
      method: "POST",
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA"
      },
      body: JSON.stringify({
        movieId: "23",
        starPoint: this.state.value
      }),
    })
      .then((res) => { return res.json()})
      .then((res) => { console.log(res) })
  }

  render() {
    const { value, hover } = this.state;

    console.log('value >>>>>>>>>>>>>>> ',value);

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
          {this.state.value}
        </div>
    )
  }
}

export default HoverRating;