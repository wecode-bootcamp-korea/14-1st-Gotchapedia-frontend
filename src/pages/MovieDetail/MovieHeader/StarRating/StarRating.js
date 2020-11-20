import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.scss';

class StarRating extends Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      hover: null,
    }
  }

  render() {
    const { rating, hover } = this.state;
    
    return (
      <div className='StarRating'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input 
                type='radio' 
                name='rating' 
                value={ratingValue} 
                onClick={() => this.setState({ rating: ratingValue })}
              >
              </input>
              <FaStar 
                className='star' 
                color={ratingValue <= (hover || rating) ? "#FFC107" : "#E4E5E9"} 
                size={30}
                onMouseEnter={() => this.setState({ hover: ratingValue })}
                onMouseLeave={() => this.setState({ hover: null })}
              />
            </label>
          )
        })}
      </div>
    )
  }
}

export default StarRating;
