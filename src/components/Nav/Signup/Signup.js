import React, { Component } from 'react';
import './signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('TOKEN'));
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log(name);
    console.log(email);
    console.log(password);
    if (this.props.clickedType === '로그인') {
      if (email.length > 0 && password.length > 6 && email.includes('@')) {
        this.fetchLogin(email, password);
      } else {
        alert('로그인 오류.');
      }
    } else {
      if (
        name.length > 0 &&
        email.length > 0 &&
        password.length > 6 &&
        email.includes('@')
      ) {
        this.fetchSignUp(name, email, password);
      } else {
        alert('회원가입 오류');
      }
    }
  };

  // sign-up
  fetchSignUp = (name, email, password) => {
    fetch('http://10.58.5.89:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        console.log(res)
        res.json()
      })
      .then((res) => {
        alert("회원가입 성공");
      });
  };

  //log-in
  fetchLogin = (email, password) => {
    fetch('http://10.58.5.89:8000/user/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          console.log('token', res.token);
          localStorage.setItem('token', res.token); // 토큰 추가
        }
      });
  };

  render() {
    const {
      handleClickedType,
      handleLoginOrSignupModal,
      clickedType,
    } = this.props;
    console.log(clickedType);
    return (
      <div className='Signup' onClick={handleLoginOrSignupModal}>
        <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
          <div className='wrapper'>
            <img
              src='/images/watchapediaTextCol.png'
              alt='gotchapediaLogoCol'
              className='gotchapediaLogoCol'
            />
            <div className='signupText'>
              {clickedType === '로그인' ? '로그인' : '회원가입'}
            </div>
            <form className='signupForm'>
              <input
                type='text'
                className={clickedType === '로그인' ? 'displayNone' : 'name'}
                placeholder='이름'
                onChange={this.handleInput}
                name='name'
              />
              <input
                type='text'
                className='email'
                placeholder='이메일'
                onChange={this.handleInput}
                name='email'
              />
              <input
                type='password'
                className='password'
                placeholder='비밀번호'
                onChange={this.handleInput}
                name='password'
              />
              <button onClick={this.checkValidation} className='signupBtn'>
                {clickedType === '회원가입' ? '회원가입' : '로그인'}
              </button>
            </form>
            {clickedType === '로그인' ? (
              <>
                <span className='signUpText'>계정이 없으신가요? </span>
                <span onClick={handleClickedType}>회원가입</span>
              </>
            ) : (
              <>
                <span className='LoginText'>이미 가입하셨나요?</span>
                <span onClick={handleClickedType}>로그인</span>
              </>
            )}
            <div className='or'></div>
            <button className='kakaoBtn'>카카오 로그인</button>
            <button className='googleBtn'>구글 로그인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
