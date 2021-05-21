public class Assignment2 {

  public static void main(String[] args) {
    String a = "abc";
    String b = "ABC";
    String c = b.toLowerCase();
    System.out.println(a);
    System.out.println(b);
    System.out.println(c);

    if (a.equals(c)) {
      System.out.println("EQUAL2");

    }
    if (a.equals(b.toLowerCase())) {
      System.out.println("EQUAL2");
    }
  }
}
