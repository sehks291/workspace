package com.green.DB_Score.controller;


import com.green.DB_Score.service.ScoreService;
import com.green.DB_Score.service.ScoreServiceImpl;
import com.green.DB_Score.vo.ScoreVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class ScoreController {

    @Resource(name = "scoreService")
    private ScoreServiceImpl scoreService;

    @GetMapping("/") // 시작 페이지
    public String studentList(Model model) {
        // 학생 목록 데이터 DB에서 조회
        List<ScoreVO> stuList = scoreService.getStuList();
        model.addAttribute("stuList", stuList);
        System.out.println("학생 목록 : " + stuList);
        return "stu_list";
    }


    @GetMapping("/reg_stu") // 학생 등록 페이지
    public String regStu(){
        ScoreVO vo = new ScoreVO();
        vo.setStuNum(3);
        vo.setStuName("김세훈");
        vo.setKorScore(70);
        vo.setEngScore(70);
        vo.setIntro("안녕하세요");

        scoreService.insert(vo);
        return "reg_stu";
    }

}