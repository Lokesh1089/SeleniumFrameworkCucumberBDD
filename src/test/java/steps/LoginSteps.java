package steps;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.DriverInstances;

public class LoginSteps extends DriverInstances{


//Test login step updating from local machine
//	WebDriver driver;
// Adding new line in master - Updated
// Adding new line in test branch 	
//	@Given("User should navigate to the bookcart application")
//	public void userShouldNavigateToTheBookcartApplication() {
//		System.setProperty("webdriver.chrome.driver",
//				"C:\\Users\\ajlok\\OneDrive\\Documents\\SeleniumAutomation\\AutomationBin\\Drivers\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("https://bookcart.azurewebsites.net/");
//		Options manage = driver.manage();
//		manage.window().maximize();
//		manage.timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		System.out.println(driver.getTitle());
//
//Im from master
//	} Im from test branch updated


	@Given("click on Login button")
	public void clickOnLoginButton() {

		driver.findElement(By.xpath("//span[contains(text(),'Login')]")).click();

	}
	/*
	 * @Given("enter the username as Kurapika") public void
	 * enterTheUsernameAsKurapika() {
	 * driver.findElement(By.xpath("//input[@data-placeholder='Username']")).
	 * sendKeys("Kurapika");
	 * 
	 * }
	 * 
	 * @Given("enter the password as Chainuser123") public void
	 * enterThePasswordAsChainuser123() {
	 * 
	 * driver.finduser click on Login buttonElement(By.xpath("//input[@data-placeholder='Password']")).
	 * sendKeys("Chainuser123"); }
	 */

	@When("user click on Login button")
	public void userClickOnLoginButton() {
		driver.findElement(By.xpath(
				"//button[@class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']//*[contains(text(),'Login')]"))
				.click();

	}

	@Then("login should be successful")
	public void loginShouldBeSuccessful() {

		String username = driver.findElement(By.xpath("//mat-icon[contains(text(),'account_circle')]/..")).getText();
		System.out.println(username);
	
	}

	@Given("enter the username as {string}")
	public void enterTheUsernameAs(String username) {
		driver.findElement(By.xpath("//input[@data-placeholder='Username']")).sendKeys(username);
	}

	@Given("enter the password as {string}")
	public void enterThePasswordAs(String password) {
		driver.findElement(By.xpath("//input[@data-placeholder='Password']")).sendKeys(password);
	}

	@When("login should be failed")
	public void loginShouldBeFailed() {
			String actualError = driver.findElement(By.xpath("//mat-error[@id='mat-error-0']")).getText();
			Assert.assertEquals(actualError, "Username or Password is incorrect.");
		
	}

}
