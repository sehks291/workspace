import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as boardApi from '../apis/boardApi';
import '../pages/BoardList.css';

const BoardList = () => {

  // 가져올 값
  const [boardList, setBoardList] = useState([]);

  const navigate = useNavigate();
  
  // 게시글 조회 기능
  useEffect(()=>{
    boardApi.getBoardList()
    .then((res)=>{
      setBoardList(res.data);
    })
    .catch((error)=>{
      console.log(error)
      console.log('axios 오류')
    })
  }, []);

  return (
    <div className='board-list-container'>
        <div className='search-div'>
            <select>
              <option>제목</option>
              <option>작성자</option>
            </select>
            <input type='text' className='board-inp'/>
            <button tpye='button' className='btn'>검색</button>
        </div>
        <div className='board-list-div'>
          <table>
              <colgroup>
              <col width='15%'/>
              <col width='20%'/>
              <col width='20%'/>
              <col width='20%'/>
              </colgroup>
            <thead className='thead'>
              <tr>
                <td>NO</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
              </tr>
            </thead>
            <tbody className='tbody'>
              {
                boardList.map((board, i)=>{
                  return(
                    <tr key={i}>
                      <td>{boardList.length - i}</td>
                      <td>{board.title}</td>
                      <td>{board.memId}</td>
                      <td>{board.createDate}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        <button type='button' className='btn btn2'>글쓰기</button>
        </div>
    </div>
  )
}

export default BoardList;