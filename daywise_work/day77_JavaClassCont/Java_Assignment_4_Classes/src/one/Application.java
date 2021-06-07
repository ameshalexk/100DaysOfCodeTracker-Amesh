package one;

public class Application {

	public static void main(String[] args) {
		Person p = new Person();
		p.age = 22;
		p.name = "Firstname";
		System.out.println("Name: " + p.name + ", Age: " + p.age);
	}
}
