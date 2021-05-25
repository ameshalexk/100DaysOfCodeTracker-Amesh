package assignment6.com.mycompany.main;

public class App {

  public static void main(String[] args) {

    float x = 6;

    float y = 5;

    System.out.println(StaticClass.add(x, y));

    FinalClass ab = new FinalClass();

    System.out.println(ab.a);
  }
}
