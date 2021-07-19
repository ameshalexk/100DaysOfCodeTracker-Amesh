
public class CarPart {
	
	String name;
	int condition;
	boolean status;
	

	public CarPart(String name, int condition, boolean status) {
		// TODO Auto-generated constructor stub
		super();
		this.name = name;
		this.condition = 100;
		this.status = true;
			
	}
	
	public void status() {
		System.out.println(this.status? "The part works" : "The part is broken and needs repair");
		System.out.println(this.condition > 0 ? "The part works" + "as condition is " + this.condition : "The part does not work" + "as condition is " + this.condition );
	}
	

}
