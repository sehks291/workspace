package class_basic.calc2;

public class Div {

    private int a;
    private int b;

    public void setValue(int a, int b){
        this.a = a;
        this.b = b;
    }

    public int calculator(){
        return a / b;
    }
}