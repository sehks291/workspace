package com.green.Board.controller;

import com.green.Board.service.ReplyService;
import com.green.Board.vo.ReplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/reply")
public class ReplyController {

    @Resource(name = "replyService")
    private ReplyService replyService;

    //댓글 목록 조회
    @GetMapping("/list/{boardNum}")
    public List<ReplyVO> getReplyList(@PathVariable("boardNum") int boardNum){
        return replyService.getReplyList(boardNum);
    }


}
