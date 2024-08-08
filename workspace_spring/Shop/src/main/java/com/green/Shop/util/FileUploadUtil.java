package com.green.Shop.util;

import com.green.Shop.item.vo.ImgVO;
import com.green.Shop.item.vo.ItemVO;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

// 첨부 파일과 관련된 기능
public class FileUploadUtil {

    // static 여부의 차이
    // 다른 곳에서 클래스를 쓰고 싶은 경우 객체를 생성 안해도 됨.
    // static 이 없으면 객체 만들어야함.

    // 파일 업로드
    public static ImgVO fileUpload(MultipartFile uploadFile){
        // 원본 파일명 및 첨부된 파일명을 저장하기 위한 객체
        ImgVO imgVO = null;

        // input 태그에 파일을 선택했을 때만 첨부 기능 실행
        if(!uploadFile.isEmpty()){

            // imgVO 객체 생성
            imgVO = new ImgVO();

            // 파일 업로드 // 업로드 될 경로 설정
            String uploadPath =
                    "D:\\01-STUDY\\dev\\workspace\\workspace_spring\\Shop\\src\\main\\resources\\static\\upload\\";

            // 첨부될 파일명(내가 선택한 원본 파일명)
            String originFileName = uploadFile.getOriginalFilename();

            // 첨부될 파일명 랜덤 생성
            String uuid = UUID.randomUUID().toString();

            // 원본 파일에서 확장자만 추출
            String a = "abc.jpg";
            a.substring(3);

            String b = "ab.cd.ef";
            // indexOf : 찾는 문자의 index(위치)
            // indexOf : 가장 첫번째로 만나는 것의 위치를 알려줌. ( 동일한게 있는 경우 )
            // lastIndexOf : 가장 마지막에 나오는 걸 찾아줌.
            b.indexOf(".");

            // 원본 파일명에서 확장자만 추출
            // 파일명      // . 찾기
            int dotIndex = originFileName.lastIndexOf(".");
            // 찾은 .을 기준으로 글자수 잘라내기
            String extension = originFileName.substring(dotIndex);

            // 첨부될 파일명
            String attachedFileName = uuid + extension;

            // 첨부될 파일을 생성
            // File file = new File(uploadPath + originFileName); < 원래 이거였다가 아래껄로 바뀜
            File file = new File(uploadPath + attachedFileName);

            // 첨부 기능 실행
            try {
                uploadFile.transferTo(file);

                // 첨부된 파일 정보를 imgVO에 저장
                imgVO.setOriginFileName(originFileName);
                imgVO.setAttachedFileName(attachedFileName);

            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return imgVO;
    }

}
