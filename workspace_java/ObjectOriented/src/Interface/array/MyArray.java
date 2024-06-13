package Interface.array;

public class MyArray implements MyArrayUtil{

    @Override
    public double getTwoArrayAvg(int[] arr1, int[] arr2) {
        // 매개변수로 받은 두 배열의 모든 요소의 평균을 리턴
        int[] arr3 = new int[5];
        int[] arr4 = new int[4];
        for(int i = 0 ; i < arr3.length ; i++){
             arr3[i] = arr3[i] + i;
        }
        for(int i = 0 ; i < arr4.length ; i++){
            arr4[i] = arr4[i] + i;
        }
        return 0;
    }

    @Override
    public boolean isEvenArray(int[] array) {
        // 매개변수로 받은 배열의 모든 요소가 짝수일때만 리턴 True

        return false;
    }
}
