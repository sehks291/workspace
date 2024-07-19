import axios from "axios";
import { useEffect, useState } from "react";
import './DelStu.css';
import { useNavigate, useParams } from "react-router-dom";

const DelStu = () => {

  const [stuList, setStuList] = useState([]);
  
  const navigate = useNavigate();

  useEffect(()=>{
    axios
      .get('/getStuList')
      .then((res)=>{
        console.log("성공")
        setStuList(res.data);
        })
      .catch((error)=>{
      console.log("오류")
      })
    },[]);


    // 학생 삭제하는 부분
    function deleteStudent(stuNum){
      axios
      .delete(`/deleteStudent/${stuNum}`)
      .then((res)=>{
        alert("삭제되었습니다.")
        // stuList 라는 state 변수의 값을 변경 -> 재랜더링 되면서 알아서 그림 새로 그림.
        stuList.forEach((stu, i)=>{
          if(stu.stuNum == stuNum){
            stuList.splice(i, 1);
          }
        });

        setStuList([...stuList]);
      })
      .catch((error)=>{
        alert("오류");
        console.log(error);
      })
    }
    
  return (
    <div>
      <table>
        <thead>
        <tr>
          <td>No</td>
          <td>학생명</td>
          <td>삭제</td>
        </tr>
        </thead>
        <tbody>
          {
            stuList.map((stu, i)=>{
                return(
                  <tr key={i}>
                    <td>{stuList.length - i }</td>
                    <td>{stu.stuName}</td>
                    <td><button type="button" onClick={(e)=>{deleteStudent(stu.stuNum)}}>삭제</button></td>
                  </tr>
                );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default DelStu;