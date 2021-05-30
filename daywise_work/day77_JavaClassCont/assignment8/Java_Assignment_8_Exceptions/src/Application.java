
public class Application {

	public static void main(String[] args) {
		//Place your code here
		Runner runner = new Runner();
		
		try {
			runner.run();
		} catch (CustomException e) {
			e.printStackTrace();
		}
	}
}
