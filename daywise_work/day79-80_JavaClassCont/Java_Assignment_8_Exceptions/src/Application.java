
public class Application {

	public static void main(String[] args) {
		//Place your code here
		
		try {
			Runner runner = new Runner();

			runner.run();
		} catch (CustomException e) {
			e.printStackTrace();
		}
	}
}
