import logo from './logo.svg';
import './App.css';
import data from './data';
import ItemList from './ItemList';
import axios from 'axios';

function App() {
  
  // 상품 목록 데이터 -> 코드가 많기에 다른 파일로 분류해둔 것
  // const item_list = data;
  let item_list = [];

  // 해당 주소로 접속하겠다는 뜻
  // 자바에서 가져온 데이터 출력하는 것
  axios.get('/test1')
  .then((res) => {
    console.log(res.data);
  });

  axios.get('/test2')
  .then((res) => {
    console.log(res.data);
  });

  axios.get('/test3')
  .then((res) => {
    console.log(res.data);
  })
  
  axios.get('/test4')
  .then((res) => {
    console.log(res.data);
    item_list = res.data;
    
    // 우측은 자바에서 가져온 데이터
    // 우측의 데이터를 좌측에 넣으라는 소리
  })


  const item = ({
    itemNum : 1,
    itemName : '처음 만나는 자바',
    price : 20000,
    intro : '자바 초보자를 위한 책',
    imgName : 'book_1.jpg'
  });

  return (
    <div className="App">
     <div className='header'>
      Book Shop     
     </div>
     <div className='banner'>
     <img src={process.env.PUBLIC_URL + '/header.jpg'} />
     </div>  
     <ItemList item_list={item_list}/>
     <Test name={'홍길동'} age={20}/>
  </div>
  );
}
                
const Test = ({name, age}) => { // {name: '홍길동', age: 20}
  // props 는 객체 -> 객체의 데이터를 넘기기 위해서는
  // 객체.넘길 데이터의 이름
  return(
    <div>123</div>
  );
};

export default App;
