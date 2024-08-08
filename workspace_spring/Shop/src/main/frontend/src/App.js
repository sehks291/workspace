import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import { useEffect, useState } from 'react';
import RegItem from './pages/admin/RegItem';


// 새로고침과 재랜더링은 다른 개념 ( 주의할 것 )
// 새로고침하면 state 변수값 전부 초기화
// 재랜더링하면 state 변수값 보존
function App() {

  const navigate = useNavigate();

  // 로그인 정보를 저장할 수 있는 state 변수 저장
  // 사이트 안에서 어디든 로그인 정보가 저장되어있어야 하기 때문에 모든 사이트 통틀어 이용 가능한 App.js에 선언
  const [loginInfo, setLoginInfo] = useState({
  });

  // 로그인 성공 시 loginInfo에 로그인 정보를 저장하지만
  // 새로고침하면 App.js를 다시 시작하면서 loginInfo 변수값 초기화
  // 새로고침을 하더라도 sessionStorage에 로그인 정보는 존재하니,
  // 새로고침 할때 만약 로그인 정보가 sessionStorage에 남아있다면
  // loginInfo state 변수에 로그인 정보를 저장해야함.

  // app.js가 mount(새로고침, 처음 들어왔을 때)되면 실행
  // useEffect : 그림 다 그린 후 실행 ( 자꾸 까먹음 )
  useEffect(() => {
    // 세션에 저장된 로그인 정보 가져옴
    const sessionLoginInfo = window.sessionStorage.getItem('loginInfo');

    
    // 세션에 로그인 정보가 있으면..
    if(sessionLoginInfo != null){
      // 로그인 정보를 loginInfo에 저장
      // 1. 저장을 하기 위해서 문자열로 만들었던것을 다시 객체로 변환
      const obj_loginInfo = JSON.parse(sessionLoginInfo)
      // 2. 로그인 정보를 loginInfo에 저장
      setLoginInfo(obj_loginInfo);
    }
  }, []);

  // 빈 객체인지 확인하는 코드
  // Object.keys() -> 객체 안의 모든 키 값을 가져옴
  console.log( Object.keys(loginInfo).length )

  return (
    <div className="container">

      <div className='login-div'>
        
        <div>
          {
            Object.keys(loginInfo).length == 0 
            ? 
            <ul className='header-menu'>
            <li><span onClick={(e)=>{navigate('/loginForm')}}>Login</span></li>
            <li><span onClick={(e)=>{navigate('/join')}}>Join</span></li> 
            </ul>
            :
            <div className='header-menu'>
              {loginInfo.memId}님 반갑습니다.
              <span onClick={() => {
                // 세션에 저장된 로그인 정보 삭제
                  window.sessionStorage.removeItem('loginInfo');
                // loginInfo state 변수의 값을 비워줌
                setLoginInfo({});

                // 상품 목록 페이지로 이동
                navigate('/')
              }}>Logout</span>
            </div>
          }  
          
        </div>
        <div className='banner'> {/*이미지랑 제목을 감싸는 부모 태그*/}
          <div>
            <img className='banner-img' src='http://localhost:8080/images/book_banner.PNG'/> {/*이미지 들어가는 공간*/}
          </div> 
          <div className='title-div'>BOOK SHOP</div>
        </div>
      </div>

      <div className='layout-div'>
        <Routes>

        {/* 유저 */}
        <Route path='/' element={<UserLayout />}>
        
          {/* 상품 목록 화면 */}
          <Route path='' element={<div>상품목록화면</div>}/> 

          {/* 회원가입 페이지 */}
          <Route path='join' element={<Join/>}/>

          {/* 로그인 페이지 */}
          <Route path='loginForm' element={<Login setLoginInfo={setLoginInfo} loginInfo={loginInfo}/> }/>

        </Route>
        
        {/* 관리자 */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='test1' element={<div>상품등록페이지</div>}/>

          {/* 상품 등록 화면 */}
          <Route path='regItem' element={<RegItem/>} />

          {/* 상품 조회 */}

          {/* 상품 등록 */}

        </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
