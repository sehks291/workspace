import axios from 'axios';
import React, { useState } from 'react'
import * as memberApi from '../apis/memberApi';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });


  function changeLoginData(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
  });
  }

  function login(){
    // Id, Pw 입력했는지 유효성 검사 해야함.
    memberApi.login(loginData)
    .then(()=>{})
    .catch(()=>{});
  }


  return (
    <div>
      <input type='text' placeholder='input ID' 
      name='memId' onChange={(e)=>{changeLoginData(e)}} />


      <input type='text' placeholder='input PW' 
      name='memPw' onChange={(e)=>{changeLoginData(e)}} />      


      <input type='button' className='btn' value='로그인' onClick={(e)=>{login()}}/>      
    </div>
  )
}

export default LoginForm;