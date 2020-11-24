import React, { Component } from 'react';
import { FaStar, FaStarHalfAlt} from 'react-icons/fa';
import './StarRating.scss';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


class StarRating extends Component {

  render() {
    const { rateStar, starHover, ratingStars, mouseEnterEvent, mouseLeaveEvent } = this.props;
    
    return (
      <div className='StarRating'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <span style={{width:"15px",overflow:"hidden"}}key={i}>
              <input 
                type='radio'
                name='rateStar' 
                value={ratingValue} 
                onClick={() => ratingStars(ratingValue)}
              >
              </input>

              <FaStarHalfAlt 
                className='star' 
                color={ratingValue <= (starHover || rateStar) ? "#FFC107" : "#E4E5E9"} 
                size={30}
                onMouseEnter={() => mouseEnterEvent(ratingValue)}
                onMouseLeave={() => mouseLeaveEvent(null)}
                aria-hidden="true"
              />
            </span>
          )
        })}
      </div>
    )
  }
}

export default StarRating;
