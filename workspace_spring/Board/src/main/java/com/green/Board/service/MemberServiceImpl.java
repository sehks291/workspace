package com.green.Board.service;


import com.green.Board.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService{

    @Autowired
    private SqlSessionTemplate sqlSession;


    // 중복
    // 중복이면 리턴값 true
    // 중복 x   리턴값 false
    @Override
    public boolean isDuplicateId(String memId) {
        // id가 null이면 회원가입 가능
        // id가 null이 아니거나, 조회되면 회원가입 불가능
        String id = sqlSession.selectOne("memberMapper.isDuplicate", memId);
        // 아이디가 나오면 String으로 id 받기

        return id != null;
        // id null 아니면 true
    }

    // 가입
    @Override
    public void join(MemberVO memberVO) {
        sqlSession.insert("memberMapper.join", memberVO);
    }

    @Override
    public MemberVO login(MemberVO memberVo) {
        return sqlSession.selectOne("memberMapper.login", memberVo);
    }
}
