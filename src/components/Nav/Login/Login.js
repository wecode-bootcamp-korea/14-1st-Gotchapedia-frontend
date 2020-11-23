import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    console.log(e.target.name, e.target.value);
    this.setState({
      [name]: value,
    });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const checkEmail = email.includes('@');
    const checkPassword = password.length > 6;
    if (checkEmail && checkPassword) {
      console.log('okay');
      this.makeRequest(email, password);
    } else {
      alert('validation fail', email, password);
    }
  };

  makeRequest = (email, password) => {
    fetch('http://10.58.7.77:8000/user/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'qudwns123@gmail.com',
        password: 'qudwns123',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        // this.setState({
        // 'name': '김태현',
        // 'email':
      });
    // });
  };

  render() {
    const { closeLogin } = this.props;
    return (
      <div className='Signup' onClick={closeLogin}>
        <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
          <div className='wrapper'>
            <img
              src='/images/watchapediaTextCol.png'
              alt='gotchapediaLogoCol'
              className='gotchapediaLogoCol'
            />
            <div className='signupText'>로그인</div>
            <form
              action='submit'
              className='signupForm'
              onSubmit={this.checkValidation}
            >
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
              <button className='loginBtn'>로그인</button>
            </form>
            <div className='lostPasswordText'>비밀번호를 잊어버리셨나요?</div>
            <div className='intoSignupText'>
              계정이 없으신가요? <span>회원가입</span>
            </div>
            <div className='or'></div>
            <button className='kakaoBtn'>카카오 로그인</button>
            <button className='googleBtn'>구글 로그인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
