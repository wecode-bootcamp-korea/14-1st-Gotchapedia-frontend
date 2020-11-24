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
    const { castingListData } = this.props;

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

    // console.log(castingListData);

    return (
      <Slider {...settings}>
        {castingListData.map((el,idx) => {
          return (
            <div key={idx}>
              <div  className='castingContentList'>
              <div className="castingImage">
                <img className='castingImg' src={castingListData[idx]?.image} alt='배우'></img></div>
                <div className='profileDetail'>
                  <div className='castingName'>{castingListData[idx]?.name}</div>
                  <div className='castingRole'>{castingListData[idx]?.position}</div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }
}

export default CastingList;