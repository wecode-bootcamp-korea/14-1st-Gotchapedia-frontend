import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'pages/Mypage/Mytaste/BelovedPeople/belovedPeople.scss';
import { BELOVEDPEOPLE_API } from 'config';

class BelovedPeople extends Component {
  constructor() {
    super();
    this.state = {
      belovedPeople: [],
    };
  }

  componentDidMount() {
    this.loadBelovedPeople();
  }

  loadBelovedPeople = () => {
    fetch(BELOVEDPEOPLE_API)
      .then(res => res.json())
      .then(res => this.setState({ belovedPeople: res.staff }))
      .catch(error => console.log('error', error));
  };

  render() {
    const settings = {
      className: 'center',
      centerMode: false,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 1,
      arrows: true,
      speed: 500,
      rows: 3,
      slidesPerRow: 2,
    };
    const { belovedPeople } = this.state;

    return (
      <Slider {...settings}>
        {!!belovedPeople.length > 0 &&
          belovedPeople.map((staff, idx) => {
            return (
              <div key={idx}>
                <div className='castingContentList'>
                  <div className='castingImage'>
                    <img className='castingImg' src={staff.image} alt='배우' />
                  </div>
                  <div className='profileDetail'>
                    <div className='castingName'>{staff.name}</div>
                    <div className='castingRole'>{staff.position}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    );
  }
}

export default BelovedPeople;
