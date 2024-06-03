package 문제모음.IF문_문제_1;

import java.util.Scanner;

public class Test6 {
    public static void main(String[] args) {
        int a;
        Scanner sc = new Scanner(System.in);
        System.out.println("숫자 입력");

        a = sc.nextInt();
        if(a % 5 != 0){
            System.out.println("5의 배수를 입력하세요");
        }

    }
}
