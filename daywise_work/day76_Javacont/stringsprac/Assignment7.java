public class Assignment7 {

  public static void main(String[] args) {
    String a = "http://example.com?access_token=EFEc8328h29jndjd02h12$3829&ds98d";

    int indexCheck = a.indexOf("=");

    System.out.println(a.substring(indexCheck + 1));

  }
}
