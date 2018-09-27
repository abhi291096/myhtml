var webdriver = require('selenium-webdriver');
var assert = require('assert');


By = webdriver.By, until = webdriver.until;


var capabilities = {
 'browserName' : 'chrome'
}

var child;

//Initialize Driver
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();




driver.get(' http://9aaad92d.ngrok.io');

driver.findElement({xpath: '//body/p'}).getText().then( function(ans){

	 if(assert.equal("Hello World",ans) == undefined)
  {
    console.log("Success");
  }

});

driver.quit();
