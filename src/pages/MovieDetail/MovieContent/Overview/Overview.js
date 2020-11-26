import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  MOVIEDETAIL_MOCKUP_API,
  MOVIEDETAIL_SERVER_API,
  MOVIEDETAIL_TOKEN,
} from '../../../../config';
import './overview.scss';
import Nav from '../../../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      overviewData: {},
    };
  }

  // 서버용
  componentDidMount() {
    fetch(`http://3.35.216.109:8000/movies/${this.props.id}/detail`, {
      method: 'GET',
      headers: {
        Authorization: MOVIEDETAIL_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // this.setState({
        //   overviewData: res.data,
        // });
        console.log(res);
      })
      .catch((err) => console.log('err >>>>> ', err));
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.id !== this.props.id) {
  //     fetch(`http://3.35.216.109:8000/movies/${this.props.id}/detail`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // this.setState({
  //       //   overviewData: res.data,
  //       // });
  //       console.log(res);
  //     })
  //     .catch((err) => console.log('err >>>>> ', err));
  //   }
  // }

  // componentDidMount() {
  //   fetch(, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: MOVIEDETAIL_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // this.setState({
  //       //   overviewData: res.data,
  //       // });
  //       console.log(res);
  //     })
  //     .catch((err) => console.log('err >>>>> ', err));
  // }

  // 라우터 숫자처리 ??
  goToMovieDetail = () => {
    this.props.history.push(`/movies/${this.props.match.params.id}`);
  }

  render() {
    const { overviewData } = this.state;

    console.log('>>>>>>>>>>>>>>>>>>', )
    return (
      <>
        <Nav />
        <div className='overviewHeading'>
          <FontAwesomeIcon
            className='headingArrow'
            onClick={this.goToMovieDetail}
            icon={faArrowLeft}
          />
          <div className='headingTitle'>기본 정보</div>
        </div>
        <div className='overviewContentsWrapper'>
          <div className='overviewContents'>
            <div className='overviewTitle'>
              <div className='title'>원제</div>
              <div className='content'>{overviewData.name}</div>
            </div>
            <div className='overviewYears'>
              <div className='title'>제작 연도</div>
              <div className='content'>{overviewData.openDate}</div>
            </div>
            <div className='overviewCountry'>
              <div className='title'>국가</div>
              <div className='content'>{overviewData.country}</div>
            </div>
            <div className='overviewGenre'>
              <div className='title'>장르</div>
              <div className='content'>
                {!!overviewData.id && overviewData.genre[0].name}
              </div>
            </div>
            <div className='overviewTime'>
              <div className='title'>상영시간</div>
              <div className='content'>{overviewData.showTime}</div>
            </div>
            <div className='overviewDetail'>
              <div className='title'>내용</div>
              <div className='content'>{overviewData.description}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Overview);
