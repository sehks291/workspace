package test;

public class Test3 {
    public static void main(String[] args) {

        // 초기값을 가지는 배열 생성
        int[] arr = {5, 11, 20, 40, 30};

        // 첫 번째 요소로 초기 최대값과 최소값 설정
        int max = arr[0]; // 5
        int min = arr[0]; // 5

        // 배열로 순차적으로 값 찾기
        // forEach문 사용
        // arr을 돌린 값을 num에 저장
        for (int num : arr) {
            if (num > max) {
                // num값이 max보다 크면
                max = num;
                // max에 num값 저장
            }
            if (num < min) {
                // num값이 min보다 작으면
                min = num;
                // min에 num값 저장
            }
        }

        System.out.println("가장 큰 값: " + max);
        System.out.println("가장 작은 값: " + min);
    }
}
