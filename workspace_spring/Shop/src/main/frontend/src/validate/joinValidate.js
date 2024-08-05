// 유효성 검사 결과 저장할 변수
let resultArr = [
  false, // id
  false, // pw
  false, // name
  false  // tel
];

let result_pw1 = false;
let result_pw2 = false;

export const joinValidate = (newData, valid_tag, tagName) => {
  

  // id 값을 변경하면 id 값에 대한 피드백만 띄우기
  // pw 값을 변경하면 pw 값에 대한 피드백만 띄우기
  // name 값을 변경하면 name 값에 대한 피드백만 띄우기
  // tel 값을 변경하면 tel 값에 대한 피드백만 띄우기
  switch(tagName){
    case 'memId':
      const regex_memId = /^[a-z|A-Z]{4,12}$/;
      if(regex_memId.test(newData.memId)){
        // 아이디가 영문만 포함하는지 검사하는 정규식
        // div에 error 클래스 추가
        // memId_valid_tag.current.className = 'feedback error';
        // div 태그 안에 글자를 변경 : 4자리 이상
        // memId_valid_tag.current.textContent = "사용 불가능한 아이디입니다.";
        sendFeedbackMsg(valid_tag[0], '사용 가능한 아이디입니다.', 'good');
        resultArr[0] = true;
      } else {
        // div에 good 클래스 추가
        // memId_valid_tag.current.className = 'feedback good';
        // div 태그 안에 글자 변경 : 사용 가능한 아이디
        // memId_valid_tag.current.textContent = '사용 가능한 아이디입니다.'
        sendFeedbackMsg(valid_tag[0], '사용 불가능한 아이디입니다.', 'error');
        resultArr[0] = false;
      }

      
      
          break;
    case 'memPw' :
        case 'confirmPw' :
          
          const regex_memPw = /^(?=.*[a-z])(?=.*[0-9]).{4,12}$/;

          if(regex_memPw.test(newData.memPw)){
            sendFeedbackMsg(valid_tag[1], '사용가능한 비밀번호입니다.', 'good');
            result_pw1 = true;
          } else {
            sendFeedbackMsg(valid_tag[1], '비밀번호 형식이 틀립니다.', 'error');
            result_pw1 = false;
          }


          if(newData.memPw != newData.confirmPw){
            sendFeedbackMsg(valid_tag[2], '비밀번호가 일치하지 않습니다.', 'error' )
            result_pw2 = false;
          } else {
            sendFeedbackMsg(valid_tag[2], '', 'good')
            result_pw2 = true;
          }
          
            resultArr[1] = result_pw1 && result_pw2 ? true : false;
            
          break;
    case 'memName':
      const regex_memName = /^[ㄱ-ㅎ|가-힣]{2,10}$/;
  
      if(regex_memName.test(newData.memName)){
          sendFeedbackMsg(valid_tag[3], '사용 가능한 이름입니다.', 'good');
          resultArr[2] = true;
      } else {
          sendFeedbackMsg(valid_tag[3], '잘못 입력되었습니다.', 'error');
          resultArr[2] = false;
      }
          break;
    case 'memTel':
          const regex_memTel = /^\d{2,3}-\d{3,4}-\d{4}$/;
          if(regex_memTel.test(newData.memTel)){
            sendFeedbackMsg(valid_tag[4], '유효한 연락처입니다.', 'good');
            resultArr[3] = true;
          } else{
            sendFeedbackMsg(valid_tag[4], '연락처를 확인해주세요.', 'error')
            resultArr[3] = false;
          }
          break;
  }


  // 배열에 매개변수로 전달된 데이터가 존재하면 include는 리턴 true
  // resultArr.includes(false);

  for(const e of resultArr){
    // 들어온 값이 전부 true일 경우 리턴 실행 안됨.
    // 하나라도 false가 있는 경우 리턴 false
    if(!e){
      return false;
    }
  }

  // result Arr의 모든 데이터가 true일때만 리턴 true
  return true;
}

// 유효성 검사 유효성 결과 메시지 띄우는 함수
function sendFeedbackMsg(feedbackTag, msg, type){
  feedbackTag.current.className = `feedback ${type}`;
  feedbackTag.current.textContent = msg;
}

