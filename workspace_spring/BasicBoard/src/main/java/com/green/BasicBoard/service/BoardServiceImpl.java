package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService") // boardService라는 이름을 사용하기 위해 이름을 선언
public class BoardServiceImpl implements BoardService{


    @Autowired
    private SqlSessionTemplate sqlSession;

    // 게시글 목록 조회
    @Override
    public List<BoardVO> getBoardList(SearchVO searchVO) {
        return sqlSession.selectList("boardMapper.getBoardList", searchVO);
    }

    @Override
    public void getBoardInsert(BoardVO boardVO) {
        sqlSession.insert("boardMapper.getBoardInsert", boardVO);
    }


}
