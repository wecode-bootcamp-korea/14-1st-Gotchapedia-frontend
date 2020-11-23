import React, { Component } from 'react';
import Slider from "react-slick";
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './castingList.scss';

// 슬릭 슬라이더 화살표 이렇게 커스텀한다 ~
// const NextArrow = ({onClick})=>{
//   return (<div onClick={onClick} style={{backgroundColor:'#fff', border:'1px solid rgb(249,249,249)', width:'34px', height:'34px', borderRadius:'50%', fontSize:'34px', fontWeight:'normal', color:'black', position:'absolute', right:'10px', top:'80px', zIndex:'12322'}}>
//     {'->'}
//   </div>)
// }

// const PrevArrow = ({onClick})=>{
//   return (<div onClick={onClick} style={{backgroundColor:'#fff', border:'1px solid rgb(249,249,249)', width:'34px', height:'34px', borderRadius:'50%', fontSize:'34px', fontWeight:'normal', color:'black', position:'absolute', left:'10px', top:'80px', zIndex:'12312'}}>
//     {'<-'}
//   </div>)
// }

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
      // 슬릭 슬라이더 화살표 커스텀 이렇게 한다 ~
      // nextArrow:<NextArrow/>,
      // prevArrow:<PrevArrow/>
    };

    // console.log(castingListData);

    const staff = castingListData.staff;

    return (
      <>
        <Slider {...settings}>
          {staff.map((el,idx) => {
            return (
              <div>
                <div key={idx} className='castingContentList'>
                  <img className='castingImage' src={staff[idx]?.image} alt='배우'></img>
                  <div className='profileDetail'>
                    <div className='castingName'>{staff[idx]?.name}</div>
                    <div className='castingRole'>{staff[idx]?.position}</div>
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