import axios from 'axios'
import React, { useState } from 'react'
import Modal from '../../common/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  // 로그인 버튼 클릭시 화면에 보여지는 모달창의 상태
  // 처음에는 안뜨게 해야하기 때문에 false로 줌.
  // id, pw 입력 여부 확인 모달
  const [beforeLoginModal, setBeforeLoginModal] = useState(false);

  // 로그인 쿼리가 실행된 후 로그인 여부에 따라 보여지는 모달창의 상태
  const [afterLoginModal, setAfterLoginModal] = useState(false);

  // 로그인 성공 실패 여부를 저장하는 변수
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  // 입력한 내용을 저장할 변수
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });



  // 입력한 id, pw를 loginData에 저장하는 함수(입력할때마다 실행)
  function changeLoginData(e) {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  // 로그인 버튼 클릭 실행하는 함슈~
  function login() {
    // id, pw 입력 여부 확인
    if(loginData.memId == '' || loginData.memPw == ''){
      // 모달창 상태를 보이게 변경
      setBeforeLoginModal(true);
      return;
    }

    
    axios.post('api_member/login', loginData)
    .then((res)=>{
      // java에서 null 데이터가 전달되면 res.data는 빈문자('') 데이터로 변환됨.
      setAfterLoginModal(true);  
      if(res.data == ''){ // 로그인 실패시
          setIsLoginSuccess(false);
      } else { // 로그인 성공 시
          setIsLoginSuccess(true);
          console.log(res.data)

          // 로그인할 사람의 정보 저장
          const loginInfo = {
            memId : res.data.memId,
            memName : res.data.memName,
            memRole : res.data.memRole
          }

          // 로그인 정보를 가진 객체를 문자열 형태로 변환
          // 객체(object)를 문자열로 변환한 데이터를 JSON 데이터라고 말함.
          // JSON.stringify -> 객체를 문자열로 바꾸는 함수
          const json_loginInfo = JSON.stringify(loginInfo);

          // sessionStorage에 로그인한 회원의 id, pw, role 정보 저장
          // session에 데이터를 넣을 때 단점 : 문자 데이터만 들어감.
          window.sessionStorage.setItem('loginInfo', json_loginInfo);  
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // login 쿼리 실행 후 뜨는 모달 안의 내용
  function drawModalContent(){

    return(
      <>
      {
        isLoginSuccess
        ?
        <div>환영합니다.</div>
        :
        <div>아이디 비밀번호를 확인해주세요.</div>
      }
      </>
    );

  }

  // login 쿼리 실행후 띄우는 모달창 안의 확인 버튼 클릭 시 실행되는 내용
  function handleBtn(){
    if(isLoginSuccess){ // 로그인 성공시 확인 버튼 내용
      // 로그인 성공 시 상품 목록 페이지로 이동 
      navigate('/')
    }
  }
  
  return (
    <div className='login-page-div'>
      <div>
        <input type='text' className='form-control' name='memId' placeholder='Input your ID'
        onChange={(e) => changeLoginData(e)}/>
      </div>
      <div>
      <input type='password'className='form-control' name='memPw' placeholder='Input your Password'
      onChange={(e) => changeLoginData(e)}/>
      </div>
      <div>
        <button className='btn btn-primary' onClick={(e) => {login()}}>L O G I N</button>
      </div>

      {/* login 중 id, pw 입력 여부 확인하는 모달창 */}
      {/* content 실행하면 modal.js 안에 있는 content를 실행한다는 내용 */}
      {
        beforeLoginModal
        ?
        <Modal content={()=>{
          return(
            <div>ID, PW는 필수 입력입니다.</div>
          );
        }} 
              setIsShow={setBeforeLoginModal}
              clickCloseBtn={()=>{}}
        />
        :
        null
      }
      {/* login 쿼리 실행 후 팝업되는 모달창 */}
      {
        afterLoginModal
        ?
        <Modal content={drawModalContent}
              setIsShow={setAfterLoginModal}
              clickCloseBtn={handleBtn}
        />
        :
        null
      }


    </div>
  )
}

export default Login;