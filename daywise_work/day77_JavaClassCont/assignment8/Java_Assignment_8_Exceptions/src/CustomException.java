
public class CustomException extends Exception {
	private String message;
	private static final long serialVersionUID = 1L;
	
	public CustomException(String message) {
		super(message);
		this.message = message;
	}
}
