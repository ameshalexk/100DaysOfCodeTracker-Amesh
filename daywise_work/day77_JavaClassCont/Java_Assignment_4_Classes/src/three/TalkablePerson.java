package three;

public class TalkablePerson {

	String name;
	int age;
	
	public TalkablePerson(String name, int age) {
		
		this.name = name;
		this.age = age;
	}

	
	void talk(){
		System.out.println("Hello my name is " + this.name );
	}
}
