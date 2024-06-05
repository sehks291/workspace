package 일곱번째_메소드.예제;

public class Method_3 {

    // 매개변수(parameter) : 메소드 정의 부분 () 안에서 정의된 변수
    // 아래의 경우 String[] args
    public static void main(String[] args) {
        tellYourName("자바");
        tellYourName("홍");

    }

    public static void tellYourName(String name){ // String name = "자바";
        System.out.println("제 이름은" + name);
    }
}
