import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.scss';

class StarRating extends Component {

  render() {
    const { rateStar, starHover, ratingStars, mouseEnterEvent, mouseLeaveEvent } = this.props;
    
    return (
      <div className='StarRating'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input 
                type='radio'
                name='rateStar' 
                value={ratingValue} 
                onClick={() => ratingStars(ratingValue)}
              >
              </input>

              <FaStar 
                className='star' 
                color={ratingValue <= (starHover || rateStar) ? "#FFC107" : "#E4E5E9"} 
                size={30}
                onMouseEnter={() => mouseEnterEvent(ratingValue)}
                onMouseLeave={() => mouseLeaveEvent(null)}
              />
            </label>
          )
        })}
      </div>
    )
  }
}

export default StarRating;
