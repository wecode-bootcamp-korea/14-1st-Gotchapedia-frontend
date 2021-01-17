import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieBox from 'pages/Main/ThemeBox/MovieBox/MovieBox';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiClient, TOKEN } from 'config';
import 'pages/Main/main.scss';

const NAMES = ['은정님', '수희님', '태현님', '영주님', '규석님', '병준님']

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.loadMainData();
  }

  loadMainData = async () => {
    try {
      const tempMovies = [];
      for (let i = 1; i < 7; i++) {
        const response = await apiClient.get(`movies/user?id=${i}`, {
          headers: { Authorization: TOKEN },
        });
        tempMovies.push(response.data.data);
        this.setState({ movies: tempMovies });
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  render() {
    
    const { movies } = this.state;
    const settings = {
      className: 'slick',
      infinite: false,
      centerPadding: '20px',
      arrows: true,
      slidesToScroll: 6,
      slidesToShow: 6,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    
    return (
      <>
        <Nav />
        <div className='Main'>
          {movies.map((list, idx) => (
          <section key={idx} className='evaluationSection'>
            <div className='sectionHeader'>
            <div className='headerLeft'>
            <span>
          <span className='pinkText'>{NAMES[idx]}</span>의 인생작 컬렉션
            </span>
              </div>
            </div>
            <div className='movieList'>
              <Slider {...settings}>
                {list.map((movie) => (
                  <MovieBox
                    key={movie.movieId}
                    date={movie.date}
                    imageURL={movie.imageURL}
                    rate={movie.rate}
                    title={movie.title}
                    movieId={movie.movieId}
                  />
                ))}
              </Slider>
            </div>
          </section>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Main);
