 var conf = require('../../nightwatch.conf.js');
module.exports = {

	'Step 1 : Login' : function (browser) {
  browser.url('https://www.shaadi.com/')
  browser.waitForElementVisible('body', 1000)
  browser.waitForElementVisible('a[type=login]', 1000)
	  browser.click('a[type=login]')
	  browser.waitForElementVisible('input[id=login_page]',3000)
	   browser.setValue('input[id=login_page]','ios@rishik.in')
	   browser.waitForElementVisible('input[id=password_page]',3000)
	   browser.setValue('input[id=password_page]','test')

  //browser.waitForElementVisible('xpath',"/html/body/div[15]/div/div/div[3]/div[2]/form/div/div[3]/a")
	  browser.click('xpath',"/html/body/div[15]/div/div/div[3]/div[2]/form/div/div[3]/a")
		  browser.url('https://www.shaadi.com/my-shaadi')

},

/*'Step 2 : Click on Shaadi Logo': function (browser) {
	browser.pause(6000)
		browser.useXpath()
	browser.click('/html/body/div/div/div[1]/div/div[1]/div/div/a/img')

},*/

'Step 3 : Go to My Photos -> Settings:No Photo Case': function (browser) {
	browser.pause(6000)
		browser.useXpath()
browser.click('/html/body/div[2]/div/div[3]/div/div/ul/li[3]/a')
		browser.pause(6000)
		browser.click('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/ul/li[2]/a/span')

},

	'Step 3 : Verify three settings along with text and Photo -> Settings': function (browser) {
		browser.useCss()
		browser.waitForElementVisible('input[id=show_all]',3000)
			browser.click('input[id=show_all]')
			browser.useXpath()
			browser.assert.containsText('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[1]/label/span[1]', 'Visible to all Members')
			console.log("First radio button click verifed")
			browser.useCss()
		browser.waitForElementVisible('input[id=when_i_contact]',3000)
			browser.click('input[id=when_i_contact]')
			browser.pause(3000)			
			browser.useXpath()
				browser.waitForElementVisible('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[2]/label/span',3000)
							//browser.assert.containsText('span[class=sc-bmeCkA hBXGdW]', 'Visible to Members I like and to all Premium Members')
				browser.click('/html/body/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[2]/label/span')
				console.log("Second radio button click verifed")
		

	console.log("Click On More")
		browser.useXpath()
				 browser.assert.containsText('/html/body/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[2]/span/div/a','More')
				 browser.click('/html/body/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[2]/span/div/a')

	browser.useCss()
			browser.waitForElementVisible('input[id=only_when_i_contact]',3000)
				browser.click('input[id=only_when_i_contact]')
				browser.useXpath()
				 browser.assert.containsText('/html/body/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[3]/label/span', 'Only Visible to Members I like')
				browser.click('/html/body/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div[2]/div[3]/label/span')
				console.log("Third radio button click verifed")
		browser.useCss()
				browser.waitForElementVisible('div[id=save-photo-display-setting]',3000)
				browser.click('div[id=save-photo-display-setting]')
	browser.useCss()
				browser.waitForElementVisible('div[class=sc-kzaZGt fIBnyR]',5000)
				browser.assert.containsText('/html/body/div[1]/div/div[3]/div/div[2]/div[2]','You do not have any Photos, please add Photos to proceed.')
				browser.useCss()
				browser.pause(3000)
				browser.click('button[id=close-simple-message-modal]')
				
	}



};
