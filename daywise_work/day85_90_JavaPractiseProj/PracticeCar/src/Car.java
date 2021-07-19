
import java.util.ArrayList;
import java.util.Iterator;


public class Car {
	
	private ArrayList<CarPart> parts = new ArrayList<>();

	public Car() {

		this.parts.add(new Engine());
			
	}

	public void run() {
		System.out.printf("Car is running!!!");
		for (Iterator<CarPart> iter = this.parts.iterator(); iter.hasNext();) {
			iter.next().status();
		}
	}
}
