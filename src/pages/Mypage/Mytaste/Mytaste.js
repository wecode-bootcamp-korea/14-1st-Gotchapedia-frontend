import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Chart from './Chart/Chart';
import './mytaste.scss';
import WordCloud from './wordCloud/wordCloud';

const randomScalingFactor = () => {
  return Math.floor(Math.random() * 100);
};

class Mytaste extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ['', '1', '', '2', '', '3', '', '4', '', '5'],
        datasets: [
          {
            label: 'Star Ratings',
            data: [10, 4, 2, 1, 5, 7, 9, 10, 10, 10, 10],
            backgroundColor: [
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
              '#fbdd62',
            ],
          },
        ],
      },
      myStar: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/my_star.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            myStar: res.user,
          },
          () => {
            this.setMyStar();
          }
        );
      });
  }

  setMyStar = () => {
    const { myStar, chartData } = this.state;
    console.log(myStar);
    console.log(chartData.datasets[0].data);
    const temp = [];
    temp.push(myStar['0.5']);
    temp.push(myStar['1.0']);
    temp.push(myStar['1.5']);
    temp.push(myStar['2.0']);
    temp.push(myStar['2.5']);
    temp.push(myStar['3.0']);
    temp.push(myStar['3.5']);
    temp.push(myStar['4.0']);
    temp.push(myStar['4.5']);
    temp.push(myStar['5.0']);
    chartData.datasets[0].data = temp;
    this.setState({ chartData });
  };

  render() {
    // console.log(this.state.myStar);
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
                  <p className='count bold big'>1120</p>
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
                      <div className='bold big'>1110</div>
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
              <div className='preferredCountry'>
                <div className='title'>영화 선호국가</div>
                <ul className='top3'>
                  <li>
                    <div className='bold big'>미국</div>
                    <div className='grey small'>94점 ・ 485편</div>
                  </li>
                  <li>
                    <div className='bold big'>영국</div>
                    <div className='grey small'>84점 ・ 142편</div>
                  </li>
                  <li>
                    <div className='bold big'>한국</div>
                    <div className='grey small'>82점 ・ 157편</div>
                  </li>
                </ul>
                <ul className='top6 grey'>
                  <li>
                    <div>독일</div>
                    <div className='small'>72점 ・ 60편</div>
                  </li>
                  <li>
                    <div>프랑스</div>
                    <div className='small'>67점 ・ 60편</div>
                  </li>
                  <li>
                    <div>캐나다</div>
                    <div className='small'>64점 ・ 39편</div>
                  </li>
                </ul>
              </div>
              <div className='preferredGenre'>
                <div className='title'>영화 선호장르</div>
                <div className='genreWrapper'>
                  <div className='genreMbti pink'>
                    인생은 역시 한 편의 드라마!
                  </div>
                  <ul className='top3'>
                    <li>
                      <div className='bold big'>드라마</div>
                      <div className='grey small'>91점 ・ 485편</div>
                    </li>
                    <li>
                      <div className='bold big'>모험</div>
                      <div className='grey small'>90점 ・ 275편</div>
                    </li>
                    <li>
                      <div className='bold big'>액션</div>
                      <div className='grey small'>89점 ・ 288편</div>
                    </li>
                  </ul>
                  <ul className='top6 grey'>
                    <li>
                      <div>코미디</div>
                      <div className='small'>88점 ・ 298편</div>
                    </li>
                    <li>
                      <div>판타지</div>
                      <div className='small'>88점 ・ 211편</div>
                    </li>
                    <li>
                      <div>SF</div>
                      <div className='small'>87점 ・ 172편</div>
                    </li>
                  </ul>
                  <button className='moreBtn bold'>더보기</button>
                </div>
              </div>
              <div className='movieWatchingTime'>
                <div className='title'>영화 감상 시간</div>
                <div className='timeWrapper'>
                  <div className='totalTime pink big bold'>1751 시간</div>
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
