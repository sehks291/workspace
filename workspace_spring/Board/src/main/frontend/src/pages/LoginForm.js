import axios from 'axios';
import React, { useState } from 'react'
import * as memberApi from '../apis/memberApi';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

// 객체 -> json으로 변환(객체를 문자로 변환) -> json.stringify();
// json -> 객체로 변환 -> json.parse

// sessionStorage에 데이터 입력
// window.sessionStorage.setItem('name', 'kim');
// window.sessionStorage.setItem('age', 20);

// sessionStorage에 데이터 읽기
// window.sessionStorage.getItem('name');
// console.log(window.sessionStorage.getItem('name'));

// const m = {
//   stuNum : 1,
//   stuName : 'kim',
//   score : 100
// }

// window.sessionStorage.setItem('member', JSON.stringify(m));
// window.sessionStorage.getItem('member');

// const data = window.sessionStorage.getItem('member');
// console.log(data);

// JSON 데이터를 가져오면 문자로 인식해서 사용 불가
// console.log(data.stuNum);

// JSON.parse(data);
// const result = JSON.parse(data);
// console.log(result);

// 객체나 배열을 Storage에 저장할 때 json 형태로 저장할 수 있음
// json(javascript object notation) = 모든 언어에서 공통으로 해석할 수 있는 자료형
// {name : 'kim', age : 20} -> "{name : 'kim, age : 20}"


const LoginForm = () => {
  // 로그인 기능 순서
  // 1. id, pw 입력받음
  // 2. 입력받은 id, pw가 있는 회원 조회
  // 3. 조회된 데이터가 없으면 로그인 실패
  // 4. 조회된 데이터가 나오면 조회한 정보를 sessionStorage에 저장

  // 로그아웃 기능 순서
  // 1. sessionStorage에 저장된 로그인 정보 삭제
  const naviate = useNavigate();
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });

    // 리액트는 화면을 새로고침 할 때마다 데이터가 초기화 되기 때문에
    // 로그인을 했다는 정보를 일반적인 방식으로 저장해도 새로고침하면 로그인이 풀려버림.
    // 두 개의 저장 공간은 client pc에 존재함.
    // 문자열 데이터만 저장 가능
    
    // 새로고침을 해도 정보가 사라지지 않는 저장 공간을 두개 제공
    // localStorage :
    // ㄴ 여기에 저장되는 데이터는 직접 삭제하지 않는 한 반영구적으로 보전
    // ㄴ 인터넷 끊겨도, 컴퓨터 재부팅해도 데이터가 살아있음
    // 브라우저의 다른 탭끼리도 데이터 공유 O
    
    // sessionStorage : 
    // 여기에 저장되는 데이터는 인터넷을 종료하면 자동으로 사라짐
    // 브라우저에 다른 탭끼리도 데이터 공유 X

    // 사용법
    // 데이터 저장 : window.sessionStorage.setItem(key, value);
    // 데이터 읽기 : window.sessionStorage.getItem(key);
    // 데이터 삭제 : window.sessionStorage.removeItem(key);
    // 전체 데이터 삭제 : window.sessionStorage.clear();
 
  function changeLoginData(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
  });
  }

  function login(){
    // Id, Pw 입력했는지 유효성 검사 해야함.
    memberApi.login(loginData)
    // 조회 결과에 따라 로그인 실행
    // 조회 결과 있으면 로그인 처리
    // 조회 결과가 없으면 다시 로그인 할 수 있도록 처리
    .then((res)=>{

      // const loginId = res.data.memId;
      // const loginName = res.data.memName;
      // const loginRole = res.data.memRole;

      // 위에껄 아래에 객체형식으로 만듬.

      const loginInfo = {
        memId : res.data.memId,
        memName : res.data.memName,
        memRole : res.data.memRo
      }
      
      // 위에 내용을 하나하나씩 빼는 것보단, 하나로 합쳐진 정보가 res.data이기 때문에 일단 res.data를 빼와서
      // 구조분해할당으로 쓰기
      // const [memId, memName, memRole] = res.data;
      window.sessionStorage.setItem('loginInfo', JSON.stringify(res.data));
      naviate('/')

      if(res.data != ''){
        alert('로그인 성공')
        // sessionStorage에 로그인한 사람의 아이디, 이름, 권한 저장
        
      } else {
        alert('로그인 불가능')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    
      <div className='login-div'>
        <input type='text' className='login-inp' placeholder='input ID' 
        name='memId' onChange={(e)=>{changeLoginData(e)}} />
  
        <input type='password' className='login-inp' placeholder='input PW' 
        name='memPw' onChange={(e)=>{changeLoginData(e)}} />      
  
  
        <input type='button' className='btn' value='로그인' onClick={(e)=>{login()}}/>      
      </div>

  )
}

export default LoginForm;