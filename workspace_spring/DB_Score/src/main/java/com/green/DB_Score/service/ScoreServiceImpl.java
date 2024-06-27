package com.green.DB_Score.service;

import com.green.DB_Score.vo.ScoreVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("scoreService")
public class ScoreServiceImpl implements ScoreService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 학생 정보 조회
    @Override
    public List<ScoreVO> getStuList() {
         List<ScoreVO> list = sqlSession.selectList("scoreMapper.getStuList");
        return list;
    }

    // 학생 1명 추가
    @Override
    public void insert(ScoreVO scoreVO) {
        sqlSession.insert("scoreMapper.insert", scoreVO);
    }


}
