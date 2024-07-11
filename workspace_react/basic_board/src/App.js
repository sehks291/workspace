import logo from './logo.svg';
import './App.css';
import data from './data';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';

function App() {

  let board_list = data;
  // board_list엔 게시글 목록 데이터가 다 들어있는 것

  return (
    <div className="App">
      {/* 아래 Routes, Route 작성해서 path 및 elemnet 작성해야 페이지 이동하는 기능 작동함. */}
      <Routes>
        {/* 게시글 목록 페이지 */}
      <Route path='/' element={<BoardList board_list={board_list}/>} />;

        {/* 게시글 상세 정보 페이지 */}
      <Route path='/detail' element={<div>게시글 상세 정보</div>} />;


      </Routes>

    </div>
  );
}

export default App;
