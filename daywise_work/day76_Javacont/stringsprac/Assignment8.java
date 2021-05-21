public class Assignment8 {
  public static void main(String[] args) {
    String a = "adecimalpoint";
    String b = "imadotinplace";
    boolean vv;
    int count = 0;
    for (int i = 0; i < a.length(); i++) {
      if (a.length() != b.length()) {
        return;
      }
      char vala = a.charAt(i);
      String s = Character.toString(vala);
      vv = b.contains(s);
      if (vv) {
        count++;
      }
    }
    if (count == a.length()) {
      System.out.println("anagram");

    } else {
      System.out.println("not anagram");
    }

  }
}
