import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

// content : modal에서 보여지는 내용
// setIsShow : modal을 닫는 코드
// clickCloseModal : modal의 확인버튼 클릭시 실행하는 코드
const Modal = ({content, setIsShow, clickCloseBtn}) => {
  const navigate = useNavigate();
  const modalContainer = useRef();

  return (
    <div className='modal-container show' ref={modalContainer}>
        <div className='modal'>
          <div className='modal-header'>
            <span onClick={()=>{
              modalContainer.current.className = 'modal-container';
              setTimeout(() => {
                  // 모달창 닫기
                  setIsShow(false) // 모달창 닫는 코드

                  // 로그인 페이지로 이동
                  // 어떤 페이지에서 모달창을 실행했냐에 따라 실행코드가 달라져야함.
                    clickCloseBtn();
              }, 300);
              
              }}>
            <i className="bi bi-x"></i>
            </span>
          </div>  
          <div className='modal-content'>
          {
            content()
          }
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-primary' 

            onClick={()=>{ 
              modalContainer.current.className = 'modal-container';
              setTimeout(() => {
                // 모달창 닫기
                setIsShow(false) // 모달창 닫는 코드

                // 로그인 페이지로 이동
                // 어떤 페이지에서 모달창을 실행했냐에 따라 실행코드가 달라져야함.
                clickCloseBtn();
                }, 300);
                }}>확인</button>
          </div>  
        </div>
      </div>
  )
}

export default Modal;