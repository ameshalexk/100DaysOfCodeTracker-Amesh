package two;

public class MoverAndAnimate implements Animatable {

	@Override
	public void move() {
		System.out.println("Moving the mover...");
		
	}

	@Override
	public void animate() {
		System.out.println("Animating the object...");
	}

	
}
