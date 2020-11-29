import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './belovedDirector.scss';
import { BELOVEDDIRECTOR_API } from '../../../../config';

class BelovedDirector extends Component {
  constructor() {
    super();
    this.state = {
      belovedDirector: [],
    };
  }

  componentDidMount() {
    this.loadBelovedDirector();
  }

  loadBelovedDirector = () => {
    fetch(BELOVEDDIRECTOR_API)
      .then((res) => res.json())
      .then((res) => this.setState({ belovedDirector: res.director }))
      .catch((error) => console.log('error', error));
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
    const { belovedDirector } = this.state;

    return (
      <Slider {...settings}>
        {!!belovedDirector.length > 0 &&
          belovedDirector.map((director, idx) => {
            return (
              <div key={idx}>
                <div className='castingContentList'>
                  <div className='castingImage'>
                    <img
                      className='castingImg'
                      src={director.image}
                      alt='배우'
                    />
                  </div>
                  <div className='profileDetail'>
                    <div className='castingName'>{director.name}</div>
                    <div className='castingRole'>{director.position}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    );
  }
}

export default BelovedDirector;
