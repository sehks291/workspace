package test;

import java.util.Arrays;

public class Test2 {
    public static void main(String[] args) {

        // 정수를 6개 저장하는 배열
        int[] lotto = new int[6];

        // 배열의 길이만큼 반복해서 나오게 만들기
        // 단, 그 숫자는 45 초과가 나오면 안됨.
        // 중복은 가능
        for(int i = 0 ; i < lotto.length ; i++){
            lotto[i] = (int)(Math.random() * 45 + 1);
        }
        System.out.println(Arrays.toString(lotto));
    }
}
