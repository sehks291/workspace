package class_basic.calc;

import java.util.Scanner;

public class CalcTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int a = sc.nextInt();

        System.out.print("연산자 입력 : ");
        String c = sc.next();

        System.out.print("정수 입력 : ");
        int b = sc.nextInt();

        Calc c1 = new Calc(a, b);


    }
}
