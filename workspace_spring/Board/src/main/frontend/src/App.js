import logo from './logo.svg';
import './reset.css';
import './App.css';
import { json, Route, Routes, useNavigate } from 'react-router-dom';

import JoinForm from './pages/JoinForm';
import BoardList from './pages/BoardList';
import LoginForm from './pages/LoginForm';
import { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});

  useEffect(()=>{
    const loginDataString = window.sessionStorage.getItem('loginInfo');
    
    // 로그인 정보가 있으면...
    if(loginDataString != null){
      const loginData = JSON.parse(loginDataString); // json 객체로 변환
      setLoginInfo(loginData); // 객체로 변환된 로그인 정보를 loginInfo 변수에 저장
    }
  }, []);

  // 로그인 여부 확인
  // 다른 곳에서 만든 session 정보 빼오기
  // sessionStorage에 데이터 없으면 null 나옴
  
  return (
    <div className="App">
          {
            loginInfo.memId == null ? <div>로그인x</div> : <div>로그인o</div>
            // loginInfo <- 로그인 정보가 담기는 곳
          }
      <div className='header'>
        <div>

          {/* 로그인 안했을 때 */}
          <span onClick={(e)=>{navigate('/')}}>main</span>
          <span onClick={(e)=>{navigate('/loginForm')}}>Login</span>
          <span onClick={(e)=>{navigate('/joinForm')}}>join</span>


          {/* 로그인 했을 때 */}
        </div>
        <h1>자유게시판</h1>
      </div>
      
      <Routes>

      {/* 게시글 목록 페이지 */}
      <Route path='/' element={<BoardList/>}/>

      {/* 회원가입 페이지 */}
      <Route path='/joinForm' element={<JoinForm />}/>

      {/* 로그인 페이지 */}
      <Route path='/loginForm' element={<LoginForm/>}/>

      </Routes>
    </div>
  );
}

export default App;
