package 네번째_조건문;

import java.util.Scanner;

public class 개인연습용_if문2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int korScore;
        int engScore;
        int mathScore;
        int totalScore;

        System.out.print("국어 점수 - ");
        korScore = sc.nextInt();
        System.out.print("영어 점수 - ");
        engScore = sc.nextInt();
        System.out.print("수학 점수 - ");
        mathScore = sc.nextInt();
        totalScore = korScore + engScore + mathScore;
        System.out.print(totalScore + "점이므로, ");



        if(korScore <= 50 || engScore <= 50 || mathScore <=50 || totalScore <=150)
            System.out.println("불합격입니다.");
        else {
            System.out.println("합격입니다.");
        }
    }
}
