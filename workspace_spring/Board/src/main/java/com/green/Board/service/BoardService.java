package com.green.Board.service;

import com.green.Board.vo.BoardVO;

import java.util.List;

public interface BoardService {

    // 게시글 조회
    List<BoardVO> getBoardList();
}
