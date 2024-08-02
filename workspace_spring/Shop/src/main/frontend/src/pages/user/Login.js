import React from 'react'
import './Login.css';


const Login = () => {
  return (
    <div className='loginForm'>
      <div>
        <div>아이디</div>
        <div><input type='text' className='form-control' /></div>
        <div>비밀번호</div>
        <div><input type='password' className='form-control'/></div>
        <div><button type='button' className='btn btn-primary'>로그인</button></div>
      </div>
    </div>
  )
}

export default Login;