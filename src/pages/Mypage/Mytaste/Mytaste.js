import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Chart from './Chart/Chart';
import PreferredCountryGenre from './PreferredCountreNation/PreferredCountryGenre';
import WordCloud from './wordCloud/wordCloud';
import ImageUploader from '../../../service/image_uploader';
import ImgInput from './ImgInput/ImgInput';
import {
  PREFERRED_API,
  PREFERRED_TOKEN,
  MYSTAR_API,
  MYSTAR_TOKEN,
} from '../../../config';
import './mytaste.scss';

const imageUploader = new ImageUploader();
let PROFILE_IMG = '';

class Mytaste extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      chartData: {
        labels: ['', '1', '', '2', '', '3', '', '4', '', '5'],
        datasets: [
          {
            label: 'Star Ratings',
            barThickness: 35,
            data: [1, 2, 3, 4, 9, 5, 3, 2, 1, 4],
            backgroundColor: Array(10).fill('#fbdd62'),
          },
        ],
      },
      myStar: {},
      myUrl: PROFILE_IMG,
    };
  }

  componentDidMount() {
    this.loadMystarData();
    this.loadPreferredData();
    this.loadProfileImg();
  }

  loadProfileImg = () => {
    PROFILE_IMG = localStorage.getItem('profileImg');
    if (PROFILE_IMG) this.setState({ myUrl: PROFILE_IMG });
  };

  componentDidUpdate(prevProps, prevState) {
    const { myUrl } = this.state;
    if (myUrl !== prevState.myUrl) {
      this.setState({ myUrl });
    }
  }

  loadPreferredData = () => {
    fetch(PREFERRED_API, {
      method: 'GET',
      headers: {
        Authorization: PREFERRED_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ userData: res }))
      .catch((error) => console.log('error', error));
  };

  onChange = async (event) => {
    const uploadedImg = await imageUploader.upload(event.target.files[0]);
    console.log(uploadedImg.url);
    localStorage.setItem('profileImg', uploadedImg.url);
    this.setState({ myUrl: uploadedImg.url });
  };

  loadMystarData = () => {
    fetch(MYSTAR_API, {
      method: 'GET',
      headers: {
        Authorization: MYSTAR_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({ myStar: res.user }, () => {
          this.setMyStar();
        })
      )
      .catch((error) => console.log('error', error));
  };

  setMyStar = () => {
    const { myStar, chartData } = this.state;
    const copiedData = { ...chartData };
    const tempData = Object.values(myStar);
    copiedData.datasets[0].data = tempData;
    this.changeColorChart(tempData);
  };

  changeColorChart = (tempData) => {
    console.log('temp>>', tempData);
    console.log('data>>', this.state.chartData);
    // const { data } = tempData.datasets[0];
    // const { backgroundColor } = this.state.copiedData.datasets[0];
    // let idx = data.indexOf(Math.max(...data));
    // backgroundColor[idx] = '#f8a236';
    // copiedData.datasets[0].backgroundColor = backgroundColor;
    // this.setState({ chartData: copiedData });
  };

  render() {
    const { userData, myUrl } = this.state;

    return (
      <>
        <Nav />
        <div className='Mytaste'>
          <div className='header'>
            <div className='imgInputBox'>
              <ImgInput
                imageUploader={imageUploader}
                onChange={this.onChange}
                myUrl={myUrl}
              />
            </div>
            <img
              src='/images/gotchapediawhite.png'
              alt='logo'
              className='logo'
            />
            <div className='text'>취향분석</div>
            <img
              src={myUrl === '' ? '/images/profile.jpg' : myUrl}
              alt='profile'
              className='profile'
            />
            <div className='userName'>고은정</div>
          </div>
          <div className='main'>
            <section className='evaluation'>
              <div className='movieCount'>
                <div className='title'>평가수</div>
                <div className='content'>
                  <p className='count bold big'>{userData.wholeCount}</p>
                  <p className='grey small'>영화</p>
                </div>
              </div>
              <div className='Moviegraph'>
                <div className='title'>별점 분포</div>
                <div className='content'>
                  <div className='movieMbti small pink'>
                    평가에 상대적으로 깐깐한 '깐새우파'.
                  </div>
                  <div className='graph'>
                    <Chart chartData={this.state.chartData} />
                  </div>
                  <ul className='row'>
                    <li>
                      <div className='bold big'>3.2</div>
                      <div className='grey small'>별점 평균</div>
                    </li>
                    <li>
                      <div className='bold big'>{userData.wholeCount}</div>
                      <div className='grey small'>별점 개수</div>
                    </li>
                    <li>
                      <div className='bold big'>4.0</div>
                      <div className='grey small'>많이 준 별점</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className='movieSection'>
              <div className='movieTag'>
                <div className='title'>영화 선호태그</div>
                <div className='tagImgWrapper'>
                  <div className='wordCloud'>
                    <WordCloud />
                  </div>
                </div>
              </div>
              <div className='belovedActor'>
                <div className='title'>선호배우</div>
                <div className='listWrapper'>
                  <img src='/images/belovedActor.png' alt='actor' />
                </div>
              </div>
              <div className='belovedDirector'>
                <div className='title'>선호감독</div>
                <div className='listWrapper'>
                  <img src='/images/belovedActor.png' alt='actor' />
                </div>
              </div>
              {!!userData.id && <PreferredCountryGenre userData={userData} />}
              <div className='movieWatchingTime'>
                <div className='title'>영화 감상 시간</div>
                <div className='timeWrapper'>
                  <div className='totalTime pink big bold'>
                    {userData.watchingTime / 60} 시간
                  </div>
                  <div className='timeMbti pink'>
                    상위 0.1%의 고지가 저 앞에 보여요.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Mytaste;
