package com.green.Shop.admin.controller;


import com.green.Shop.admin.service.AdminService;
import com.green.Shop.item.vo.CategoryVO;
import com.green.Shop.item.vo.ItemVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api_admin")
public class AdminController {

    @Resource(name = "adminService")
    private AdminService adminService;

    // 카테고리 목록 조회
    @GetMapping("getCateList")
    public List<CategoryVO> getCateList(){
        return adminService.getCategoryList();
    }

    // 아이템 등록
    @PostMapping("insertItem")
    public ItemVO insertItem(ItemVO itemVO){
       return adminService.insertItem(itemVO);
    }
}
