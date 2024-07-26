import React, { useEffect, useState } from 'react'
import * as boardApi from '../apis/boardApi';
import { useNavigate, useParams } from 'react-router-dom';
import * as replyApi from '../apis/replyApi';
import axios from 'axios';

const BoardDetail = ({loginInfo}) => {

  const {boardNum} = useParams();

  const navigate = useNavigate();
  // 게시글 상세 목록 저장할 변수
  const [boardDetail, setBoardDetail] = useState({});

  // 댓글 목록 저장할 변수
  const [replyList, setReplyList] = useState([]);

  // 댓글 등록 시 가져가야 하는 데이터 저장할 변수
  const [replyData, setReplyData] = useState({
    replyContent : '',
    memId : loginInfo.memId,
    boardNum : boardNum
  });


  // db에서 데이터 조회 여러개 동시에 실행하기
  useEffect(()=>{
    axios.all([boardApi.getBoardDetail(boardNum)
      , replyApi.getReplyList(boardNum)])
    .then(axios.spread((res1, res2)=>{
      setBoardDetail(res1.data);
      setReplyList(res2.data);
    }))
    .catch((error)=>{
      console.log('오류')
    })
  }, []);
  

  function regReply(){
    axios.post('/reply/insert', replyData)
    .then((res)=>{
      console.log(res)
      console.log('댓글 등록 완료')
    })
    .catch((error)=>{
      console.log(error)
      console.log('댓글 등록 실패')
    })

    
  }

  return (
    <div>
      <div>
        글번호 : {boardDetail.boardNum}<br/>
        글제목 : {boardDetail.title}<br/>
        작성자 : {boardDetail.memId}<br/>
        작성일 : {boardDetail.createDate}<br/>
        글내용 : {boardDetail.content}<br/>
      </div>

      <div>
        {
          loginInfo.memRole == 'ADMIN' || loginInfo.memId == boardDetail.memId
          ?
          <>
            <button type='button' className='btn'>수정</button>
            <button type='button' className='btn'>삭제</button>
          </>
          :
          null
        }
      </div>
      {
        loginInfo.memId != null
        ?
        <div>
          <input type='text' onChange={(e)=>{
            setReplyData({
              ...replyData,
              replyContent : e.target.value  
            })
          }}/>
          <button type='button' className='btn' onClick={(e)=>{regReply()}}>댓글등록</button>
        </div>
        :
        null
      }

      <div>
          {
            replyList.map((reply, i)=>{
              return(
                <div>
                  <div>{reply.replyDate}</div>
                  <div>{reply.memId}</div>
                  <div>{reply.replyContent}</div>
                </div>
              );
            })
          }
      </div>
    </div>
  )
}

export default BoardDetail;