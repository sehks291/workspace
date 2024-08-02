import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';

function App() {

  const navigate = useNavigate();

  return (
    <div className="container">

      <div className='login-div'>
        <div>
          <ul className='header-menu'>
            <li>Login</li>
            <li><span onClick={(e)=>{navigate('/join')}}>Join</span></li> 
          </ul>
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
          <Route path='login' element={<Login/>}/>

        </Route>
        
        {/* 관리자 */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='test1' element={<div>상품등록페이지</div>}/>
        </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
