package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions (
		features = {"src/test/java/features/"},
		dryRun = !true,
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		glue = {"steps","hooks"},
		plugin = {"pretty","html:reports",
				"json:reports/results.json",
				"junit:reports/results.xml" }
//		tags = {"@Test"}
		)
public class Runner extends AbstractTestNGCucumberTests{ 

}
