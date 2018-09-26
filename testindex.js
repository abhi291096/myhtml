var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();



driver.get('http://b3decbba.ngrok.io');

driver.findElement({xpath: '//body/p'}).getText().then( function(ans){

	 if(assert.equal("Hello World",ans) == undefined)
  {
    console.log("Success");
  }

});

driver.quit();
