import React, { useEffect, useState } from 'react'
import './RegItem.css'
import axios from 'axios';

const RegItem = () => {

  // 카테고리 목록 저장할 변수
  const [categoryList, setCategoryList] = useState([]);


  // 아이템 저장할 변수

  const [regItem, setRegItem] = useState({
    cateCode : '',
    itemName : '',
    itemPrice : '',
    itemIntro : ''
  });
    

function changeInsertItem(e){
  setRegItem({
    ...regItem,
    [e.target.name] : e.target.value
  })
  console.log(insertItem);
}

  useEffect(()=>{
    axios.get('/api_admin/getCateList')
    .then((res)=>{
      console.log(res)
      setCategoryList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);


  // 상품 등록 누르면 실행되는 버튼
  function insertItem(){
    axios.post('/api_admin/insertItem', regItem)
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }


  return (
    <div className='reg-item-div'>
      <div className='input-element'>
        <div>상품 카테고리</div>
        <div>
          <select className='form-control' >
            {
              categoryList.map((category, i)=>{
                return(
                  <option key={i} >{category.cateName}</option>
                );
              })
            }
          </select>
        </div>
      </div>
      <div className='input-element'>
        <div>상품명</div>
        <div><input type='text' className='form-control' name='itemName'
        onChange={(e)=>{changeInsertItem(e)}}
        /></div>
      </div>
      <div className='input-element'>
        <div>상품 가격</div>
        <div><input type='text' className='form-control' name='itemPrice'
        onChange={(e)=>{changeInsertItem(e)}}
        /></div>
      </div>
      <div className='input-element'>
        <div>상품 소개</div>
        <div>
          <textarea className='form-control' rows={7} name='itemIntro'
          onChange={(e)=>{changeInsertItem(e)}}
          ></textarea>
        </div>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn btn-primary' onClick={(e)=>{insertItem()}}>상품등록</button>
      </div>
    </div>
  )
}

export default RegItem;