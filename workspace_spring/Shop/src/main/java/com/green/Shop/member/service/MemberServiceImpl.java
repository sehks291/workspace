package com.green.Shop.member.service;

import com.green.Shop.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// 순서3
@Service("memberService")
public class MemberServiceImpl implements MemberService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 회원등록(가입)
    @Override
    public void join(MemberVO memberVO) {
        sqlSession.insert("memberMapper.join", memberVO);
    }

    // 아이디 중복 : 중복이면 true / 중복 아니면 false
    @Override
    public boolean duplicationId(String memId) {
        //id가 null이면 회원가입 가능
        //id가 조회되면(null 아니면) 회원가입 불가능
        String id = sqlSession.selectOne("memberMapper.duplicationId", memId);
        return id != null;
    }




}
