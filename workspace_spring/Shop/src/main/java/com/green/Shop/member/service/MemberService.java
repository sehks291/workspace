package com.green.Shop.member.service;


import com.green.Shop.member.vo.MemberVO;

// 순서2
public interface MemberService {

    // 회원등록(가입)
    void join(MemberVO memberVO);

    // 아이디 중복확인 ( 맞냐, 아니냐기 때문에 true / false )
    // 아이디만 비교하면 되서 매개변수는 아이디만 넘겨도 됨.
    boolean duplicationId(String memId);


}
