package two;

public class Application {

	public static void main(String[] args) {
		PrivatePerson pp = new PrivatePerson();
		pp.setAge(20);
		
		System.out.println("Name: " + ", Age: " + pp.getAge());
	}
}
