package com.green.Board.vo;

import lombok.Data;

import java.lang.reflect.Member;
import java.util.List;

@Data
public class BoardVO {
    private int boardNum;
    private String title;
    private String content;
    private String memId;
    private String createDate;
    private MemberVO memberVO;
    private List<ReplyVO> replyList;
}
