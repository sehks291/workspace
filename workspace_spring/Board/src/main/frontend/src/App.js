import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import JoinForm from './pages/JoinForm';
import BoardList from './pages/BoardList';
import LoginForm from './pages/LoginForm';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className='header'>
        <div>
          <span onClick={(e)=>{navigate('/')}}>main</span>
          <span onClick={(e)=>{navigate('/loginForm')}}>Login</span>
          <span onClick={(e)=>{navigate('/joinForm')}}>join</span>
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
