package examples;

// import java.util.ArrayList;

public class CollectionExample {

	public static void main(String[] args) {

		ArrayList<String> arrList = new ArrayList<>();

		arrList.add("Hello");
		arrList.add(" ");
		arrList.add("World");
		arrList.add(3, "!");

		System.out.println("Value at index 2: " + arrList.get(2));
		System.out.println(arrList);
	}
}
