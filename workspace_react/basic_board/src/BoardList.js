
import './BoardList.css'


// 게시글 목록 컴포넌트
const BoardList = ({board_list}) => {
  // 바로 자바스크립트 가능
  return(
    // jsx 영역이기에 {} 사용
    <table>
      <thead>
        <tr>
          {/* 제목줄 */}
          <td>글번호</td>
          <td>글제목</td>
          <td>작성자</td>
          <td>작성일</td>
        </tr>
      </thead>
      <tbody>
        {/* 데이터를 넣어줘야할 공간, 리턴값이 있기에 map 사용 */}
        {
          board_list.map((board, i) => {
            return(
              <tr>
                <td>{board.boardNum}</td>
                <td onClick={'/detail'}>{board.title}</td>
                <td>{board.writer}</td>
                <td>{board.createDate}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default BoardList;