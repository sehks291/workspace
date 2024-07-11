
import { useParams } from 'react-router-dom';
import './Detail.css'


function Detail({item_list}){
  
  // param은 변수
  // url로 전달되는 데이터 받기
  // 1번 방식
  // const params = useParams();
  // console.log(params);
  // console.log(params.id);

  const {id} = useParams(); 
  console.log(`전달된 상품 번호 : ${id}`)

  console.log(item_list);

  let findItem = null;

  item_list.forEach((item, i) => {
    if(item.itemNum == id){
      // 가져온 상품번호가 가져온 id와 똑같은지 비교
        findItem = item;
        
    }
  });

  return(
    <>
      <div className="item-info">
        <img src={process.env.PUBLIC_URL + '/' + findItem.imgName} />
        <div>
          <h4>{findItem.itemName}</h4> 
          <p>{findItem.price}</p>
          <button type='button'>주문하기</button>
        </div>  
      </div>  
      <div className='intro'>
        상품 소개입니다.
      </div>  
    </>
  );
}

export default Detail;