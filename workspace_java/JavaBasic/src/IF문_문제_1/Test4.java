package IF문_문제_1;

import java.security.DrbgParameters;
import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        int a;
        Scanner sc = new Scanner(System.in);
        System.out.println("숫자 입력 :");

        a = sc.nextInt();

        if(a % 3 == 0){
            System.out.println("3의 배수입니다.");
        }
        else {
            System.out.println("프로그램 종료");
        }

    }
}
