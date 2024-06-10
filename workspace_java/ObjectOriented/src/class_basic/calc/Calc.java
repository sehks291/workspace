package class_basic.calc;

public class Calc {
    // 선언할 멤버변수 1순위
    private int num;
    private int num2;

    // 초기화하기
    public Calc(int num, int num2){
        this.num = 0;
        this.num2 = 0;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getNum2() {
        return num2;
    }

    public void setNum2(int num2) {
        this.num2 = num2;
    }

    public void printNum(){
        System.out.println(num);
        System.out.println(num2);
    }
}
