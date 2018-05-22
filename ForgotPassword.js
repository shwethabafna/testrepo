   var conf = require('../../nightwatch.conf.js');
module.exports = {

//CASE 1 :Verify Text On the Forgot Passowrd box

 '1. Forgot Password - cLose Layer Functionality' : function (browser) {
  browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('input[id=login_page]',4000)	  
browser.waitForElementVisible('a[id=home_forgot_password]',1000)
	  browser.waitForElementVisible('div[class=reg_layer_heading]',1000)
browser.click('a[id=home_forgot_password]')	
browser.waitForElementVisible('input[id=forgotpasswordemail]',1000)
	  browser.pause(1000)
	  browser.assert.containsText('div[id=login_box]', 'Retrieve your password via Email')
console.log("Correct Text Present - Retrieve your password via Email")

},
//--------------------------------------------------------------------------

//CASE 2 :Close layer check
'2. Close Layer Check' : function (browser) {
	browser.waitForElementVisible('div[class=reg_layer_close]',1000)
	browser.click('div[class=reg_layer_close]')
	console.log("Layer Closed successfully")
	
},
	//----------------------------------------------------------------------------------

//CASE 3 :Incorrect Email validation check

'3. Forgot Password - Incorrect email' : function (browser) {
  browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('input[id=login_page]',4000)	  
browser.waitForElementVisible('a[id=home_forgot_password]',1000)
browser.click('a[id=home_forgot_password]')
browser.waitForElementVisible('input[id=forgotpasswordemail]',1000)
	  browser.pause(1000)
	  browser.click('input[id=forgotpasswordemail]')
	  browser.setValue('input[id=forgotpasswordemail]', 'jatin4256346')
browser.pause(3000);
//browser.click('xpath',"//*[@id="frmforgotpassword"]/div[4]/a")
  browser.click('xpath',"/html/body/div[16]/div/div/div[4]/div[2]/form/div/div[4]/a")
  
  browser.pause(2000);
  browser.assert.containsText('div[id=login_box]', 'Please enter the email that you are registered with.')
	  console.log("Validation Working")
},


//--------------------------------------------

//CASE 4 :Empty email case

	'4. Forgot Password - Empty email' : function (browser) {
 /* browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('input[id=login_page]',4000)	  
browser.waitForElementVisible('a[id=home_forgot_password]',1000)
browser.click('a[id=home_forgot_password]')
browser.waitForElementVisible('input[id=forgotpasswordemail]',1000)
	  browser.pause(1000)
	  browser.click('input[id=forgotpasswordemail]')
	  browser.setValue('input[id=forgotpasswordemail]', 'jatin@bankas.in')*/
browser.pause(2000);
browser.waitForElementVisible('div[class=reg_layer_close]',1000)
	browser.click('div[class=reg_layer_close]')
browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('input[id=login_page]',4000)	  
browser.waitForElementVisible('a[id=home_forgot_password]',1000)
browser.click('a[id=home_forgot_password]')
browser.waitForElementVisible('input[id=forgotpasswordemail]',1000)
	  browser.pause(1000)
	  browser.click('input[id=forgotpasswordemail]')
	  browser.setValue('input[id=forgotpasswordemail]', '')
   //browser.waitForElementVisible('//*[@id="frmforgotpassword"]/div[4]/a',3000)
	 // browser.waitForElementVisible('a[class=pos_act_btn_green_med waves-effect waves-light touch-feedback]', 3000)
		    //browser.useXpath().click('//*[@id="frmforgotpassword"]/div[4]/a')
  //browser.waitForElementVisible('a[class=pos_act_btn_green_med waves-effect waves-light touch-feedback]',1000)
  browser.click('xpath',"/html/body/div[16]/div/div/div[4]/div[2]/form/div/div[4]/a")
  browser.assert.containsText('div[id=login_box]', 'Please enter the email that you are registered with.')
	  console.log("Empty email Validation Working")	 
},
 //----------------------------------------

//CASE 5: eMAIL SENT fUNCTIONALITY

'5. Forgot Password - Email Sent' : function(browser) {
	browser.click('input[id=forgotpasswordemail]')
		browser.setValue('input[id=forgotpasswordemail]', 'jatin@bankas.in')
		browser.click('xpath',"/html/body/div[16]/div/div/div[4]/div[2]/form/div/div[4]/a")
console.log("Email Sent")
		browser.end()
}
};