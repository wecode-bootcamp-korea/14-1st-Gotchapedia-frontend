import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import './imgInput.scss';

class ImgInput extends Component {
  constructor() {
    super();
    this.imgInput = React.createRef();
  }

  onButtonClick = (event) => {
    event.preventDefault();
    this.imgInput.current.click();
  };

  render() {
    return (
      <div className='ImgInput'>
        <div className='userCog' onClick={this.onButtonClick}>
          <FontAwesomeIcon className='headerArrow' icon={faUserCog} />{' '}
        </div>
        <input
          ref={this.imgInput}
          type='file'
          className='imgInput'
          accept='image/*'
          name='file'
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default ImgInput;
