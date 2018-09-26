var webdriver = require('selenium-webdriver');
var assert = require('assert');

var capabilities = {
    'browserName': 'chrome'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('http://b3decbba.ngrok.io');

driver.findElement({xpath: '//body/p'}).getText().then( function(ans){

	 if(assert.equal("Hello World",ans) == undefined)
  {
    console.log("Success");
  }

});

driver.quit();
