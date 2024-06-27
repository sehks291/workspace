package com.green.DB_Score.service;

import com.green.DB_Score.vo.ScoreVO;

import java.util.List;

public interface ScoreService {

   // 학생 목록 조회
   List<ScoreVO> getStuList();

   void insert(ScoreVO scoreVO);
}
