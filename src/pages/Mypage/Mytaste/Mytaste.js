import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Chart from './Chart/Chart';
import './mytaste.scss';
import PreferredCountryGenre from './PreferredCountreNation/PreferredCountryGenre';
import WordCloud from './wordCloud/wordCloud';

const PREFERRED_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';
const PREFERRED_API =
  'http://10.58.0.152:8000/analysis/favorite?category=country';
// const PREFERRED_API = 'http://localhost:3000/data/preferredCountryGenre.json';

const MYSTAR_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';
const MYSTAR_API = 'http://10.58.7.222:8000/analysis/my_star';
// const MYSTAR_API = 'http://localhost:3000/data/my_star.json';

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
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: Array(10).fill('#fbdd62'),
          },
        ],
      },
      myStar: {},
    };
  }

  componentDidMount() {
    this.loadMystarData();
    this.loadPreferredData();
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
    let tempData = [];
    for (let key in myStar) {
      tempData.push(myStar[key]);
    }
    chartData.datasets[0].data = tempData;
    this.setState({ chartData });
  };

  render() {
    const { userData } = this.state;
    return (
      <>
        <Nav />

        <div className='Mytaste'>
          <div className='header'>
            <img
              src='/images/logoPink.png
            '
              alt='logo'
              className='logo'
            />
            <div className='text'>취향분석</div>
            <img src='/images/profile.jpg' alt='profile' className='profile' />
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
              <PreferredCountryGenre userData={userData} />
              <div className='movieWatchingTime'>
                <div className='title'>영화 감상 시간</div>
                <div className='timeWrapper'>
                  <div className='totalTime pink big bold'>
                    {userData.watchingTime} 시간
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
