var conf = require('../../nightwatch.conf.js');
var j=0;
module.exports = {



'Step 1 : Login' : function (browser) {
browser.url('https://www.shaadi.com/')
browser.waitForElementVisible('body', 1000)
browser.waitForElementVisible('a[type=login]', 1000)
  browser.click('a[type=login]')
  browser.waitForElementVisible('input[id=login_page]',3000)
   browser.setValue('input[id=login_page]','india14@bankas.in')
   browser.waitForElementVisible('input[id=password_page]',3000)
   browser.setValue('input[id=password_page]','shaadi123')
 browser.click('xpath',"/html/body/div[15]/div/div/div[3]/div[2]/form/div/div[3]/a")
	  browser.url('https://www.shaadi.com/my-shaadi')

},

'Step 2 : Go to My Photos -> Settings': function (browser) {
browser.pause(6000)
	browser.useXpath()
browser.click('/html/body/div[2]/div/div[3]/div/div/ul/li[3]/a')
	browser.pause(6000)
},


'Step 6: To verify All radio buttons are clicked': function(browser){
	browser.useXpath()
browser.click('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/ul/li[2]/a/span')
browser.assert.elementPresent('//span[normalize-space(text())="Visible to all Members"]');
browser.assert.elementPresent('//span[normalize-space(text())="Visible to Members I like and to all Premium Members"]');
browser.assert.elementPresent('//span[normalize-space(text())="Only Visible to Members I like"]');
browser.pause(2000)
var btns = [];
	var see1=function(elems){
var radios=elems.value; // radios is an array here, coz elems.value is an array .Value is key which contains value as array
radios.forEach(function(radio){
     var r=radio.ELEMENT
     btns.push(radio.ELEMENT)
	browser.pause(1000)
	browser.elementIdClick(btns[j])
	browser.pause(2000)
		browser.elementIdSelected(btns[j],function(check){
		browser.verify.ok(check.value, + j +'radio is selected')
		browser.useXpath()
		browser.waitForElementVisible('//div[normalize-space(text())="Save my settings"]',2000)
		console.log("Save my setting visible for" + j + " radio button")
			browser.click('//div[normalize-space(text())="Save my settings"]')
			browser.waitForElementVisible('//div[normalize-space(text())="Settings saved"]',5000)
			console.log("Settings saved!")
			browser.pause(1000)
			j++;
		console.log("Verify J")
   })  
 })
}
browser.elements('css selector','input[type="radio"]',see1)
//browser.elementIdClick( btns.value.ELEMENT)
}
}
