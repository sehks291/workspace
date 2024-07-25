import React, { useEffect, useState } from 'react'
import * as boardApi from '../apis/boardApi';
import { useParams } from 'react-router-dom';
import * as replyApi from '../apis/replyApi';

const BoardDetail = () => {

  const {boardNum} = useParams();
  // 게시글 상세 목록 저장할 변수
  const [boardDetail, setBoardDetail] = useState({});

  // 댓글 목록 저장할 변수
  const [replyList, setReplyList] = useState([]);

  useEffect(()=>{
    boardApi.getBoardDetail(boardNum)
    .then((res)=>{
        console.log(res.data);
        setBoardDetail(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  useEffect(()=>{
    replyApi.getReplyList(boardNum)
    .then((res)=>{
      console.log(res.data)
      setReplyList(res.data);
    })
    .catch((error)=>{
      console.log('오류')
    })
  }, []);

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
        <button type='button' className='btn'>등록</button>
        <button type='button' className='btn'>수정</button>
        <button type='button' className='btn'>삭제</button>
      </div>
      <div>
          {
            replyList.map((reply, i)=>{
              return(
                <div>
                  <div>{reply.replyDate} </div>
                 <div> {reply.memId} </div>
                 <div> {reply.reply_content}</div>
                </div>
              );
            })
          }
      </div>
    </div>
  )
}

export default BoardDetail;