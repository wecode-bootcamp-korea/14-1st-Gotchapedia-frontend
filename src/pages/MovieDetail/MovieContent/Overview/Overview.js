import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './overview.scss';
import Nav from '../../../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      overviewData: [],
    }
  }

  componentDidMount() {
    fetch("/Data/contentdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        overviewData: res.data,
      })
    })
  }

  goToMovieDetail = () => {
    this.props.history.push("/movie-detail");
  }

  render() {

    const { overviewData } = this.state;

    return(
      <>
        <Nav />
        <div className='overviewHeading'>
          <FontAwesomeIcon className='headingArrow' onClick={this.goToMovieDetail} icon={faArrowLeft} />
          <div className='headingTitle'>기본 정보</div>
        </div>
        <div className='overviewContentsWrapper'>
          <div className='overviewContents'>
            <div className='overviewTitle'>
              <div className='title'>원제</div>
              <div className='content'>{overviewData[0]?.name}</div>
            </div>
            <div className='overviewYears'>
              <div className='title'>제작 연도</div>
              <div className='content'>{overviewData[0]?.openDate}</div>
            </div>
            <div className='overviewCountry'>
              <div className='title'>국가</div>
              <div className='content'>{overviewData[0]?.country}</div>
            </div>
            <div className='overviewGenre'>
              <div className='title'>장르</div>
              <div className='content'>{overviewData[0]?.genre}</div>
            </div>
            <div className='overviewTime'>
              <div className='title'>상영시간</div>
              <div className='content'>{overviewData[0]?.showTime}</div>
            </div>
            <div className='overviewDetail'>
              <div className='title'>내용</div>
              <div className='content'>
                {overviewData[0]?.description}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Overview);
