package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StudentVO;

import java.util.List;

public interface StudentService {

    // 학생 목록 조회
    public List<StudentVO> getStuList();

    // 학생 등록
    void insertStudent(StudentVO studentVO);

    // 학생 상세정보조회
    StudentVO getStuDetail(int stuNum);

    // 학생 삭제
    void deleteStudent(int stuNum);
}
