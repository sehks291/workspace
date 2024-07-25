package com.green.Board.service;

import com.green.Board.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 조회
    List<BoardVO> getBoardList();


    // 게시글 등록
    void insertBoard(BoardVO boardVO);

    // 게시글 상세 조회
    BoardVO getBoardDetail(int boardNum);
}
