import java.util.List;

public class Application {

	public static void main(String[] args) {
		int numAccounts = 3;
		
		List<Account> accounts = Account.createAccounts(numAccounts);
		System.out.println(accounts);

//		for (int i = 0; i < numAccounts; i++){
//			System.out.println(accounts.get(i));
//			System.out.println(accounts);
//
//		}
	}
}
