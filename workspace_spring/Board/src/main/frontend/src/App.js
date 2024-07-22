import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div>
          <span>Login</span>
          <span>join</span>
        </div>
        <h1>자유게시판</h1>
      </div>
      
      <Routes>

      {/* 게시글 목록 페이지 */}
      <Route path='/boardList' element={<BoardList/>}/>


      </Routes>
    </div>
  );
}

export default App;
