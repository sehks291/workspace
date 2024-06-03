package 문제모음.IF문_문제_1;

import java.util.Scanner;

public class Test2 {
    public static void main(String[] args) {

        int num;

        Scanner sc = new Scanner(System.in);
        System.out.print("점수 입력 : ");
        num = sc.nextInt();

        if(num % 2 == 0){
            System.out.println("짝수입니다.");
        }
        else{
            System.out.println("홀수입니다.");
        }
    }
}
