package 네번째_조건문;

import java.util.Scanner;

public class 개인연습용_if문1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int korScore;
        int engScore;
        int mathScore;


        System.out.print("국어 점수를 입력하세요 :");
        korScore = sc.nextInt();
        System.out.print("영어 점수를 입력하세요 :");
        engScore = sc.nextInt();
        System.out.print("수학 점수를 입력하세요 :");
        mathScore = sc.nextInt();

        if (korScore <= 15 || engScore <= 15 || mathScore <= 15) {
            System.out.println("불합격입니다.");
        }
        else {
            System.out.println("합격입니다.");
        }
    }
}
