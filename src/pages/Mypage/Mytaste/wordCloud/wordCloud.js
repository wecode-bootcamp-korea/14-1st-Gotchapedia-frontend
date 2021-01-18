import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

class WordCloud extends Component {
  render() {
    const words = [
      {
        text: '철학적인',
        value: 40,
      },
      {
        text: '블록버스터',
        value: 50,
      },
      {
        text: '완성도',
        value: 100,
      },
      {
        text: '마블',
        value: 80,
      },
      {
        text: '워너 브라더스',
        value: 79,
      },
      {
        text: '화려한',
        value: 56,
      },
      {
        text: 'OST',
        value: 100,
      },
      {
        text: '연기력',
        value: 40,
      },
      {
        text: 'SF',
        value: 80,
      },
      {
        text: '심오한',
        value: 40,
      },
    ];

    const options = {
      colors: ['#e8014c'],
      enableTooltip: false,
      deterministic: false,
      fontFamily: 'Noto Sans KR',
      fontSizes: [13, 22],
      fontWeight: 500,
      padding: 10,
      rotations: 0,
      rotationAngles: 0,
      scale: 'sqrt',
      spiral: 'archimedean',
      transitionDuration: 1500,
    };

    return <ReactWordcloud options={options} words={words} />;
  }
}

export default WordCloud;
