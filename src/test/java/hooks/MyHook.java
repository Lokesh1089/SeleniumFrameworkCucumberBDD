package hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver.Options;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;

public class MyHook extends DriverInstances {
	
	@After("@CleanCart")
	public void cleanCart(Scenario scenario) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='mat-focus-indicator mat-icon-button mat-button-base']")));
		driver.findElement(By.xpath("//button[@class='mat-focus-indicator mat-icon-button mat-button-base']")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='mat-focus-indicator mat-elevation-z4 mat-raised-button mat-button-base']")));
		driver.findElement(By.xpath("//button[@class='mat-focus-indicator mat-elevation-z4 mat-raised-button mat-button-base']")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'Cart cleared!!!')]")));
		String toastText = driver.findElement(By.xpath("//span[contains(text(),'Cart cleared!!!')]")).getText();
		Assert.assertEquals(toastText, "Cart cleared!!!");
	}
		
	
	
	@Before(order=2)
	public void beforeScenarioOne(Scenario scenario) {
		System.out.println("Hey man, I'm from before scenario One!!!!");
	}

	@Before(order=1)
	public void beforeScenario(Scenario scenario) {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\ajlok\\OneDrive\\Documents\\SeleniumAutomation\\AutomationBin\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://bookcart.azurewebsites.net/");
		Options manage = driver.manage();
		manage.window().maximize();
		manage.timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		System.out.println("Page title " + driver.getTitle());
	}

	@After(order=1)
	public void afterScenario(Scenario scenarioName) {

		boolean isFailed = scenarioName.isFailed();
		System.out.println("Is scenario failed? " + isFailed);

		if (isFailed == true) {
			TakesScreenshot ts = (TakesScreenshot) driver;

			byte[] src = ts.getScreenshotAs(OutputType.BYTES);
			scenarioName.embed(src, "image/png");
		}

		driver.quit();
	}
	@BeforeStep
	public void beforeStep(Scenario scenario) {
//		TakesScreenshot ts = (TakesScreenshot) driver;
//		 byte[] src = ts.getScreenshotAs(OutputType.BYTES);
//		 scenario.embed(src, "image/png");
	}
	@AfterStep
	public void afterStep(Scenario scenario) {
//		TakesScreenshot ts = (TakesScreenshot) driver;
//		 byte[] src = ts.getScreenshotAs(OutputType.BYTES);
//		 scenario.embed(src, "image/png");
	}

}
