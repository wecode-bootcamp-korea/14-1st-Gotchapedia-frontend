import React, { Component } from 'react';
import WantToSee from 'pages/MovieDetail/MovieHeader/WantToSee/WantToSee';
import HoverRating from 'pages/MovieDetail/MovieHeader/HoverRating/HoverRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'pages/MovieDetail/MovieHeader/movieHeader.scss';
import { TOKEN } from 'config';

class MovieHeader extends Component {
  constructor() {
    super();
    this.state = {
      headerData: [],
      isWantToSee: false,
      rateStar: null,
      starHover: null,
      starScore: null,
      starPoint: null,
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

  componentDidMount() {
    fetch(`${process.env.REACT_APP_SERVER}analysis/star/${this.props.id}`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          starPoint: res.starPoint,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { starPoint } = this.state;
    if (starPoint !== prevState.starPoint) {
      this.setState({ starPoint });
    }
  }

  render() {
    const { isWantToSee, starPoint } = this.state;
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
              alt='바닐라스카이꼭보세요'
            ></img>
            <div className='posterDetailWrapper'>
              <div className='posterTitle'>{movieHeaderData.name}</div>
              <div className='posterTitleDetail'>{genre[0].name}</div>
              <div className='posterRating'>
                <div className='averageRating'>
                  평균 <FontAwesomeIcon icon={faStar} />
                  {starPoint ? starPoint : ''} (3292명)
                </div>
                <div className='ratingContent'>
                  <div className='buttonContainer'>
                    <button className='wantToSeeWrapper'>
                      <div className='plusIconWrapper'>
                        <FontAwesomeIcon className='plusIcon' icon={faPlus} />
                      </div>
                      <div
                        className={isWantToSee ? 'wantToSee' : ''}
                        onClick={this.openWantToSee}
                      >
                        보고싶어요
                      </div>
                    </button>
                    <button className='modalBtnWrapper'>
                      <div className='modalBtn'>▾</div>
                    </button>
                  </div>
                  <div className='starRatingBox'>
                    <HoverRating
                      starPoint={starPoint}
                      movieId={movieHeaderData.id}
                    />
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
