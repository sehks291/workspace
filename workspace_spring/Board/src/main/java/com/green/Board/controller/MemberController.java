package com.green.Board.controller;


import com.green.Board.service.MemberService;
import com.green.Board.vo.MemberVO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j // 로그 남길 때 쓰는 어노테이션, 모든 클래스 위에서 사용 가능
@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name = "memberService")
    private MemberService memberService;

    // @PathVariable("inputId") < 이 이름으로 넘어오는 데이터를 받아서
    // String inputId에 저장함
    // 아이디 중복 확인
    @GetMapping("/checkId/{inputId}")
        public boolean checkId(@PathVariable("inputId") String inputId){

            // true -> 아이디 사용 불가능
            // false -> 아이디 사용 가능
            return memberService.isDuplicateId(inputId);

    }

    // 회원가입
    @PostMapping("/join")
    public void join(@RequestBody MemberVO memberVO){
//        log.info(" ======================= join() 메소드 실행 =============================== ");
//        log.info(" ======================= memberVO에 전달된 데이터 =============================== ");
//        log.info(memberVO.toString());
//        log.info(" ======================= 데이터 확인 끝 ======================= ");
        memberService.join(memberVO);
    }

    // 로그인
    @PostMapping("/login")
    public MemberVO login(@RequestBody MemberVO memberVO){
        // 조회된 데이터가 없으면 Null
        MemberVO member = memberService.login(memberVO);
        // 비동기 통신 - axios에서 then으로 값 가져가려면 return 사용
        return member;
    }

}
