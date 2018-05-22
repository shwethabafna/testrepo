   var conf = require('../../nightwatch.conf.js');
module.exports = {

//CASE 1 :Click on Sign Up Free

 '1. Forgot Password - cLose Layer Functionality' : function (browser) {
  browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('a[type=registration]',4000)	  
browser.click('a[type=registration]')	
	  browser.pause(5000)	 
},

//--------------------------------------------------------------------------

//CASE 2 :Email,pw,Profilefor,sex
'2. Enter email,PW,for,sex' : function (browser) {
	browser.waitForElementVisible('body', 1000)
	browser.waitForElementVisible('input[id=layer_email]', 1000)
	browser.click('input[id=layer_email]')	
	browser.setValue('input[id=layer_email]', 'jatin4256346@bankas.in')
browser.click('input[id=layer_password1]')	
	browser.setValue('input[id=layer_password1]', 'test')
	browser.assert.elementPresent('span[class=select2-chosen]');
	browser.click('span[class=select2-chosen]');
}
};