import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WantToSee from './WantToSee/WantToSee';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MOVIEDETAIL_TOKEN } from '../../../config';
import Rating from './HoverRating/HoverRating';

class MovieHeader extends Component {
  constructor() {
    super();
    this.state = {
      headerData: [],
      isWantToSee: false,
      rateStar: null,
      starHover: null,
      starScore: null,
<<<<<<< HEAD
      // scoreText: '평가하기'
      starPoint: null,
    }
=======
    };
>>>>>>> main
  }

  openWantToSee = () => {
    this.setState({
      isWantToSee: true,
    });
  };

  closeWantToSee = () => {
    this.setState({
      isWantToSee: false,
    })
  }

  // 이게 왜 평균별점으로 계속 주지??
  componentDidMount() {
    fetch(`http://3.35.216.109:8000/analysis/star/${this.props.id}`, {
        headers: {
        Authorization: MOVIEDETAIL_TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ 
          starScore: res.starPoint
        });
        console.log('찍은별점을 받음 >>>>>>>>>>>>>> ', res.starPoint)  
      })
      // this.loadStarRating()
    }
  


  // 별점 반영
  componentDidUpdate(prevProps, prevState) {
    const { starPoint } = this.state;
    if (starPoint !== prevState.starPoint) {
      this.setState({ starPoint });
    }
  }

  render() {
    const { isWantToSee, starPoint, starScore } = this.state;
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
                <div className='averageRating'>평균 <FontAwesomeIcon icon={faStar} />{starPoint}(3292명)</div>
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
                    <Rating starPoint={starScore}/>
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
