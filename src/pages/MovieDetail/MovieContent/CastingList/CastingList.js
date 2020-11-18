import React, { Component } from 'react';
import './castingList.scss';
import Slider from "react-slick";
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

class CastingList extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { castingList } = this.props;

    const settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 3,
      slidesPerRow: 2
    };

    return (
      <>
        <Slider {...settings}>
          {castingList.map((el, idx) => {
            return (
              <div key={idx} className='castingContentList'>
                <img src={el.image} alt='배우'></img>
                <div className='profileDetail'>
                  <div className='name'>{el.name}</div>
                  <div className='role'>{el.role}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </>
    )
  }
}

export default CastingList;