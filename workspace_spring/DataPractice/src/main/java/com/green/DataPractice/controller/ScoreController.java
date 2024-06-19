package com.green.DataPractice.controller;


import com.green.DataPractice.vo.ScoreVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ScoreController {


    @GetMapping("/ic")
    public String inputScore(){
        return "input_score";
    }

    @PostMapping("/ic2")
    public String inputScore2(ScoreVO scoreVO, Model model){
        model.addAttribute("name", scoreVO.getName());
        return "input_score2";
    }

    @PostMapping("/ic3")
    public String inputScore3(ScoreVO scoreVO, Model model){
        model.addAttribute("age", scoreVO.getAge());
        model.addAttribute("tell", scoreVO.getTell());
        model.addAttribute("tell2", scoreVO.getTell2());
        model.addAttribute("gender", scoreVO.getGender());
        return "input_score3";
    }

    @PostMapping("/ic4")
    public String inputScore4(ScoreVO scoreVO, Model model){
        return "input_score4";
    }


































    @GetMapping("/a")
    public String inputName(){

        return "input_name";
    }

    @PostMapping("/b")
    public String inputAge(@RequestParam(name = "name") String name, Model model){
        model.addAttribute("name", name);
        System.out.println(name);
        return "input_age";
    }

    @PostMapping("/c")
    public String show(@RequestParam(name = "name") String name, @RequestParam(name = "age") int age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "show";
    }

}
