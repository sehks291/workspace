import React, { useRef, useState } from 'react'
import './Join.css';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';
import Modal from '../../common/Modal';
import { useNavigate } from 'react-router-dom';

const Join = () => {

  // daum 주소 api 팝업창을 띄우기 위한 함수 선언
  const open = useDaumPostcodePopup();
  
  const navigate = useNavigate();

  // 주소 검색 팝업창이 닫힐 때 실행되는 함수
  function handleComplete(data) {
    // 우편번호
    console.log(data.zonecode)
    // 도로명 주소
    console.log(data.roadAddress)

    // input 태그에 자동으로 입력되도록 설정
    setJoinData({
      ...joinData,
      post: data.zonecode,
      memAddr: data.roadAddress
    })
  }

  // 주소 검색 버튼 클릭 시 실행되는 함수
  function handleClick() {
    open({ onComplete: handleComplete });
  }

  // 도메인을 같이 가져오기 위한 변수
  // input 태그를 참조할 변수
  const email_1 = useRef();
  const email_2 = useRef();


  // 회원가입 쿼리 실행 시 가져와서 저장할 변수
  const [joinData, setJoinData] = useState({
    memId: '',
    memPw: '',
    confrimPw: '', // 비밀번호 확인하기 위해 만든 변수
    memName: '',
    memTel: '',
    post: '',
    memAddr: '',
    addrDetail: '',
    memEmail: '' // 이메일은 받아올 경우 입력한 정보 뒤의 도메인을 합쳐서 가져와야함.
  });

  // 가져온 데이터 변경할 함수
  function changeJoinData(e) {

    setJoinData({
      ...joinData,
      [e.target.name]: e.target.name != 'memEmail' ?
        e.target.value : email_1.current.value + email_2.current.value
    })
    // 아래식을 위에 식처럼 삼항연산자로 변경하면 코드가 간단해짐.

    // if(e.target.name == 'memEmail'){
    //   setJoinData({
    //     ...joinData,
    //     [e.target.name] : email_1.current.value + email_2.current.value
    //   })

    // }
    // else{
    //   setJoinData({
    //     ...joinData,
    //     [e.target.name] : e.target.value
    //   })
    // }
  }

  // 회원가입 버튼 클릭 시 insert 쿼리 실행하러 가기
  function join(){
    // java로 가는건 앞에 api 붙여서 안 헷갈리게 하기
    axios.post('/api_member/join', joinData)
    .then((res)=>{
      setIsShow(true)
      console.log(res)
      // 로그인 페이지로 이동
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // 모달창 랜더링 여부
  const [isShow, setIsShow] = useState(false);

  // 모달창 안의 내용 생성하는 함수
  function setModalContent(){
    return(
      <div>회원가입을 축하합니다.</div>
    )
  }

  // 아이디 중복 확인
  const checkId = () => {
    axios.get(`/api_member/checkId/${joinData.memId}`)
    .then((res)=>{
      console.log('성공')
      console.log(res.data);
      const result = res.data;
      alert(result ? '이미 사용중인 ID입니다.' : '사용 가능한 아이디입니다');
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='join-div'>

      <div>
        <table className='join-table'>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <div className='inline-input'>
                  <input className='form-control' type='text' name='memId' onChange={(e) => { changeJoinData(e) }} />
                  <button className='btn btn-primary' type='button' onClick={()=>{checkId()}}>중복확인</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input className='form-control' type='password' name='memPw' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>비밀번호확인</td>
              <td><input className='form-control' type='password' name='confirmPw' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input className='form-control' type='text' name='memName' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>연락처</td>
              <td><input className='form-control' type='text' placeholder='숫자만 입력하세요.'
                name='memTel' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div className='inline-input'>
                  <input className='form-control' type='text' placeholder='우편번호'
                    name='post' value={joinData.post} readOnly={true}
                    onClick={handleClick} onChange={(e) => { changeJoinData(e) }} />
                  <button className='btn btn-primary' type='button'
                    onClick={handleClick}>검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input value={joinData.memAddr} className='form-control' type='text' placeholder='주소'
                name='memAddr' readOnly={true}
                onClick={handleClick} onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input className='form-control' type='text' placeholder='상세주소'
                name='addrDetail' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <div className='inline-select'>
                  <input className='form-control' type='text'
                    name='memEmail' ref={email_1} onChange={(e) => { changeJoinData(e) }} />
                  <select className='form-control'
                    name='memEmail' ref={email_2} onChange={(e) => { changeJoinData(e) }}>
                    <option value={'@naver.com'}>naver.com</option>
                    <option value={'@gmail.com'}>gmail.com</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='btn-div'>
        <button className='btn btn-primary' type='button' onClick={(e)=>{join(
          navigate('/login')
        )}}>회원가입</button>
      </div>

      {/* 회원가입 성공 시 열리는 모달창 */}

      {
        isShow ? <Modal content={setModalContent} setIsShow={setIsShow}/> : null
      }

    </div>
  )
}

export default Join;