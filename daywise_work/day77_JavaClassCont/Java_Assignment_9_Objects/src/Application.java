
public class Application {

	public static void main(String[] args) {
		MyObject obj1 = new MyObject(222L);
		MyObject obj2 = new MyObject(222L);
		
		if (obj1.equals(obj2)){
			System.out.println("The two objects are equivalent");
		} else {
			System.out.println("The two objects are NOT equivalent");
		}
	}
}
