import React, { Component } from 'react';
import Slider from "react-slick";
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './castingList.scss';

class CastingList extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { contentData } = this.props;

    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      arrows:true,
      speed: 500,
      rows: 3,
      slidesPerRow: 2,
    };

    return (
      <>
        <Slider {...settings}>
          {contentData.map((el, idx) => {
            return (
              <div>
                <div key={idx} className='castingContentList'>
                  <img className='castingImage' src={el.castingImage} alt='배우'></img>
                  <div className='profileDetail'>
                    <div className='castingName'>{el.castingName}</div>
                    <div className='castingRole'>{el.castingRole}</div>
                  </div>
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