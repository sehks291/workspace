import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



// app() 함수의 리턴문 안에 작성하는 코드가 화면에 나타남
// html 코드처럼 보이는 것은 jsx 라는 문법임
// 그렇기 때문에 html과 조금 다른 부분이 있다.
function App() {

  const titles = ['울산 맛집', '리액트 공부', '집에 갈랭'];

  // 좋아요 갯수
  let cnt = 0;

  // [] 첫번째 : 변수(변수의 초기값)
  // 해석 : useState(값이) [] 안의 첫번째 변수에 값이 들어가있다.
  let [likeCnt, setLikeCnt] = useState(0); 
  // name에 java값이 들어가있음.
  let [name, setName] = useState('java');
  // arr에 1,2,3이 들어가있음.
  let [arr, setArr] = useState(1, 2, 3);

  function test(){
    alert(23);
  }

  return (
    <div className="App">
      <div className="blog-nav">
        <h3>My Blog</h3>
      </div>
      <div className="list">
        <h4>
          {titles[0]} 
          <span onClick={() => {
            alert(1); 
          }}> 👍 </span>
           {cnt} {likeCnt}
       </h4>
        <p>2024-07-04</p>
      </div>
      <div className="list">
        <h4>{titles[1]}</h4>
        <p>2024-07-04</p>
      </div>
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>2024-07-04</p>
      </div>
    </div>
  );
}

export default App;
