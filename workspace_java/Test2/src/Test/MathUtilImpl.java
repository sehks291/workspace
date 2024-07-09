package Test;

public class MathUtilImpl implements MathUtil{

    @Override
    public boolean isEven(int a, int b, int c) {

        // 매개변수의 합부터 구하기
        int sum = a + b + c;
        if(sum % 2 == 0 && sum % 5 == 0){
            return true;
        }
        return false;
    }

    @Override
    public int getSumFromOne(int num) {
        // 1부터 매개변수로 받은 수까지의 합을 리턴
        int sum = 0 ;
        for( int i = 0 ; i < num ; i++)
            sum = sum + i;
        return sum;
    }

    @Override
    public boolean getArraySum(int[] arr) {
        return false;
    }
}
