package com.green.Shop.member.controller;

import com.green.Shop.member.service.MemberService;
import com.green.Shop.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api_member")
public class MemberController {

    @Resource(name = "memberService")
    private MemberService memberService;

    // 회원등록(가입)
    @PostMapping("/join")
    public void join(@RequestBody MemberVO memberVO){
        memberService.join(memberVO);
    }

    // 아이디 중복확인 쿼리
    @GetMapping("/checkId/{inputId}")
    public boolean checkId(@PathVariable("inputId") String memId){
        return memberService.duplicationId(memId);
    }


}
