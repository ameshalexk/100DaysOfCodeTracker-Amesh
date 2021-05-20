public class Assignment11 {

  public static void main(String[] args) {
    int count = 0;
    int[] a = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

    for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < a.length; j++) {
        int result = a[i] * a[j];
        count = count + result;
      }
    }
    System.out.println(count);
  }
}
