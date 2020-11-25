import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './main.scss';
import ThemeBox from './ThemeBox/ThemeBox';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movieListData: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.152:8000/movie/movies/user', {
      method: 'GET',
      headers: {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E',
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

    return (
      <>
        <Nav />
        {!!movieListData.length > 0 && <ThemeBox movieListData={movieListData} />} 
        <Footer />
      </>
    );
  }
}

export default Main;
