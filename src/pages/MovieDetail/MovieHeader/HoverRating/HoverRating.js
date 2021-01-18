import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import 'pages/MovieDetail/MovieHeader/HoverRating/hoverRating.scss';
import { TOKEN } from 'config';
import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
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
      hover: -1,
    };
  }
  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_SERVER}analysis/star/${this.props.movieId}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          starPoint: res.starPoint,
          value: res.starPoint,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    if (value !== prevState.value) {
      fetch(
        `${process.env.REACT_APP_SERVER}analysis/star/${this.props.movieId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: TOKEN,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ starPoint: value }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({
            starPoint: res.starPoint,
          });
        });
    }
  }

  render() {
    const { value, hover } = this.state;
    return (
      <div className='hoverRatingWrapper'>
        <div className='hoverRating'>
          {value !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
          <Rating
            name='hover-feedback'
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              this.setState({ value: newValue });
            }}
            onChangeActive={(event, newHover) => {
              this.setState({ hover: newHover });
            }}
            onClick={this.sendStar}
          />
        </div>
      </div>
    );
  }
}
export default HoverRating;
