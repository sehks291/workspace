package com.green.Board.service;

import com.green.Board.vo.ReplyVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 댓글 목록 조회
    @Override
    public List<ReplyVO> getReplyList(int boardNum) {
        return sqlSession.selectList("replyMapper.getReplyList", boardNum);
    }
}
