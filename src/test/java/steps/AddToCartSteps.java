package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.DriverInstances;

public class AddToCartSteps extends DriverInstances {
	
	
//	WebDriver driver;
//	@Given("User should launch a bookcart web application")
//	public void userShouldLaunchABookcartWebApplication() {	     
//	    
//	    System.setProperty("webdriver.chrome.driver", 
//	    		"C:\\Users\\ajlok\\OneDrive\\Documents\\SeleniumAutomation\\AutomationBin\\Drivers\\chromedriver.exe");
//	    driver = new ChromeDriver();
//	    driver.get("https://bookcart.azurewebsites.net/");
//	    Options manage = driver.manage();
//	    manage.window().maximize();
//	    manage.timeouts().implicitlyWait(5,TimeUnit.SECONDS);
//	    driver.getTitle();
//	}
	    
	//test

	@Given("Log into application with {string} and {string}")
	public void logIntoApplicationWithAnd(String username, String password) {
	     
		driver.findElement(By.xpath("//span[contains(text(),'Login')]")).click();
		driver.findElement(By.xpath("//input[@data-placeholder='Username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@data-placeholder='Password']")).sendKeys(password);
	}

	@Given("user search for a {string}")
	public void userSearchForA(String book) {
	     
	    driver.findElement(By.xpath("//input[@type='search']")).sendKeys(book);
	    driver.findElement(By.xpath("//span[@class='mat-option-text']")).click();
	}

	@When("user click on  add to cart")
	public void userClickOnAddToCart() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
	     driver.findElement(By.xpath("//*[contains(text(),'Add to Cart')]")).click();
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'One Item added to cart')]")));
	     wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//span[contains(text(),'One Item added to cart')]")));    
	}

	@Then("cart should be updated")
	public void cartShouldBeUpdated() {
	     
	   String cartQty =  driver.findElement(By.xpath("//span[@id='mat-badge-content-0']")).getText();
	    Assert.assertEquals(Integer.parseInt(cartQty)>0, true);
	    System.out.println("Updated cart quantity "+cartQty);
	}

	
}
