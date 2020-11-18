// import React, { Component } from 'react';
// import MovieBox from './MovieBox/MovieBox';
// import './themeBox.scss';

// class ThemeBox extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movieData: [],
//       movieBoxValue: '',
//     };
//   }
//   componentDidMount() {
//     fetch('http://localhost:3000/data/movielist.json')
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           movieData: res.data,
//         });
//       });
//   }

//   render() {
//     // const { movieData } = this.state;

//     return (
//       <div className='boxRankingWrap'>
//         Theme Box
//         {/* <MovieBox data={this.state.commonList} /> */}
//         <div className='boxRankingHeadWrap'>
//           <div className='boxRankingHead'>박스오피스</div>
//         </div>
//         <div className='boxRankingBodyWrap'>
//           {/* <MovieBox movieData={moviedata} /> */}
//           <div className='boxRankingBody'>
//             <div className=''></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ThemeBox;
