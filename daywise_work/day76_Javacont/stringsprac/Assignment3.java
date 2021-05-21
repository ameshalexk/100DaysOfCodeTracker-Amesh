public class Assignment3 {

  public static void main(String[] args) {
    String a = "abc";
    String b = new String("abc");

    if (a.equals(b)) {
      System.out.println("EQUAL1");
    }

    if (a == b) {
      System.out.println("EQUAL2");
    }
  }
}
