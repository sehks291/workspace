import React, { useState } from 'react'
import './JoinForm.css';
import axios from 'axios';
import * as memberApi from '../apis/memberApi';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
  // 회원가입 시 가져가야하는 데이터를 저장할 state 변수
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState({
    memId : '',
    memPw : '',
    confirmPw : '',
    memName : '',
    gender : 'male'
  });

  // 버튼 활성화 여부 state 변수
  const [isDisable, setIsDisable] = useState(true);
  
  // input 태그에 값 입력시 joinData 변경
  function changeJoinData(e){
    // 아이디 input 태그의 값이 변경되면 회원가입 버튼 비활성화
    if(e.target.name == 'memId'){
        setIsDisable(true);
    }
    setJoinData({
      ...joinData,
      [e.target.name] : e.target.value
    });
  }

  // 아이디 중복확인 함수
  function checkId(){
    if(joinData.memId == ''){
      alert('아이디를 입력해주세요.');
      return;
    }

    // 아이디 값을 가지고 자바로 가서 중복확인 쿼리 실행
    memberApi.checkId(joinData.memId)
    .then((res)=>{
      // true = 아이디 사용 x
      // fals = 아이디 사용 o
      const result = res.data;

      if(!result){
        setIsDisable(false);
      }

      if(result){
        alert("ID 중복")
      } else{
        alert("사용 가능")
      }   
    })
    .catch((error)=>{
      alert('중복 확인 오류');
      console.log(error);
    });
  }

  function join(){
    // 회원가입 버튼 클릭 시 실행
     // validation 처리 (유효성 검사)
      if(joinData.memPw != joinData.confirmPw){
          alert('입력한 비밀번호가 다릅니다.')
          return;
      }

      //아이디 4~8글자
      const idLength = joinData.memId.length;
      if(idLength < 4 || idLength > 8){
          alert('아이디는 4~8글자 사이로 입력해주세요.')
          return;
        }


     // 회원가입
      memberApi.join(joinData)
      .then((res)=>{
        alert('회원가입을 축하드립니다.') 
        navigate('/loginForm');
      })
      .catch((error)=>{
        
      })
  }

  return (
    <div className='join-div'>
      <div>
        <p className=''>아이디</p>
        <div className='id-area'>
          <input type='text' className='inp' 
          name='memId' onChange={(e)=>{changeJoinData(e)}}/>
          <button type='button' className='btn' onClick={(e)=>{checkId()}}>중복확인</button>
        </div>
      </div>
      <div>
        <p>비밀번호</p>
        <input type='password' className='inp' 
        name='memPw' onChange={(e)=>{changeJoinData(e)}} />
      </div>
      <div>
        <p>비밀번호 확인</p>
        <input type='password' className='inp' 
        name='confirmPw' onChange={(e)=>{changeJoinData(e)}}/>
      </div>
      <div>
      <p>이름</p>
      <input type='text' className='inp' 
      name='memName' onChange={(e)=>{changeJoinData(e)}}/>
      </div>
      <div className='gender-div'>
        <div><span>성별</span></div>
        <div>
          <input type='radio' name='gender' value='male' 
          onChange={(e)=>{changeJoinData(e)}}
          checked={joinData.gender == 'male'}
          />남
        </div>
        <div>
          <input type='radio' name='gender' value='female'
          onChange={(e)=>{changeJoinData(e)}}
          checked={joinData.gender == 'female'}
          />여
          </div>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn' 
                onClick={(e)=>{join()}} disabled={isDisable}>회원가입</button>
      </div>
    </div>
  )
}

export default JoinForm;