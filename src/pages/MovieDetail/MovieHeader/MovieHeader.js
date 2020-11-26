import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WantToSee from './WantToSee/WantToSee';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MOVIEDETAIL_TOKEN } from '../../../config';
import Rating from './HoverRating/HoverRating';
import './movieHeader.scss';

class MovieHeader extends Component {
  constructor() {
    super();
    this.state = {
      headerData: [],
      isWantToSee: false,
      rateStar: null,
      starHover: null,
      starScore: null,
    };
  }

  openWantToSee = () => {
    this.setState({
      isWantToSee: true,
    });
  };

  closeWantToSee = () => {
    this.setState({
      isWantToSee: false,
    });
  };


  render() {
    const { isWantToSee } = this.state;
    const { movieHeaderData } = this.props;
    const subImage = movieHeaderData.subImage;
    const genre = movieHeaderData.genre;

    return (
      <div>
        <div className='MovieHeaderTop'>
          <img src={subImage[0]?.url} alt='무비서브이미지'></img>
        </div>
        <div className='MovieHeaderBottom'>
          <div className='posterWrapper'>
            <img
              src={movieHeaderData.mainImage}
              alt='바닐라스카이꼭보세요'></img>
            <div className='posterDetailWrapper'>
              <div className='posterTitle'>{movieHeaderData.name}</div>
              <div className='posterTitleDetail'>{genre[0].name}</div>
              <div className='posterRating'>
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIconWrapper'>
                        <FontAwesomeIcon className='plusIcon' icon={faPlus} />
                      </div>
                      <div
                        className={isWantToSee ? 'wantToSee' : ''}
                        onClick={this.openWantToSee}>
                        보고싶어요
                      </div>
                    </button>
                    <button className='modalBtnWrapper'>
                      <div className='modalBtn'>▾</div>
                    </button>
                  </div>
                  <div className='starRatingBox'>
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isWantToSee ? '' : 'displayNone'}>
          <WantToSee
            wantToSeeData={movieHeaderData}
            isWantToSee={isWantToSee}
            closeWantToSee={this.closeWantToSee}
          />
        </div>
      </div>
    );
  }
}

export default MovieHeader;
