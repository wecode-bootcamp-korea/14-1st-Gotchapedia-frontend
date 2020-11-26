import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './main.scss';
import ThemeBox from './ThemeBox/ThemeBox';
import { MOVIEDETAIL_TOKEN, MOVIEDETAIL_MOCKUP_API } from '../../config';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      movieListData: [],
    };
  }

  componentDidMount() {
    fetch('http://3.35.216.109:8000/movies/user', {
      method: 'GET',
      headers: {
        Authorization:
        MOVIEDETAIL_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movieListData: res.data,
        });
      });
  }

  render() {
    const { movieListData } = this.state;
    // console.log('movieListData >>>>>>>>>>>>>> ', movieListData)
    return (
      <>
        <Nav />
        {!!movieListData.length > 0 && (
          <ThemeBox movieListData={movieListData} />
        )}
        <Footer />
      </>
    );
  }
}

export default Main;
