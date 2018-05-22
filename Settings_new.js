var conf = require('../../nightwatch.conf.js');
var i=1;
var more=0;
var j=0;
var k=0;
var length;
module.exports = {


	'Step 1 : Login' : function (browser) {
		browser.url('https://www.shaadi.com/')
		browser.waitForElementVisible('body', 1000)
		browser.waitForElementVisible('a[type=login]', 1000)
		browser.click('a[type=login]')
		browser.waitForElementVisible('input[id=login_page]',3000)
		browser.setValue('input[id=login_page]','user351@rishik.in')
		browser.waitForElementVisible('input[id=password_page]',3000)
		browser.setValue('input[id=password_page]','test')
		browser.click('xpath',"/html/body/div[16]/div/div/div[3]/div[2]/form/div/div[3]/a")
		browser.url('https://www.shaadi.com/my-shaadi')
			

	},

	'Step 2 : Go to My Photos -> Settings': function (browser) {
		browser.pause(6000)
		browser.useXpath()
		browser.click('/html/body/div[2]/div/div[3]/div/div/ul/li[3]/a')
		browser.pause(6000)


	},

/*'Step 3: CHeck if Photo is present'  : function (browser){

	browser.element('css selector','img[alt="Abum Photos"]',function(result) {
  	  if(result.status === -1)
	  {
	 console.log("Photo Album Present,verify photo blurring as well \n")
		 check=1;
		 }
	  else
		{
		  console.log("Photos not Present \n")
	  }
	}
	)

},*/

'Step 3 : To Check How many radio buttons are visible currently':  function (browser) {

	var btns = [];

	browser.useXpath()
	browser.click('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/ul/li[2]/a/span')
	browser.pause(4000)
	//browser.url('http://local.my.shaadi.com:3000/my-shaadi/photo#settings')
		browser.pause(3000)

	browser.useCss()
	browser.waitForElementVisible('input[type=radio]',9000)

	var see=function(elems){
		var radios=elems.value;
     console.log('Currently ' + radios.length + ' buttons seen \n') // radios is an array here, coz elems.value is an array .Value is key which contains value as array
     radios.forEach(function(radio){
     	btns.push(radio.ELEMENT)
     	browser.pause(1000);
     	browser.elementIdSelected(radio.ELEMENT,function(check){
     		if(check.value != -1){
     			browser.verify.ok(check.value, + i +' setting is selected amongst the three \n');
     			console.log(check.value)
					i++;
     		}
     		else{
     			console.log("Check for other")
     		}	            
     	}) 
     })
      
     length=radios.length;     
 }
 browser.elements('css selector','input[type="radio"]',see)
//browser.elementIdClick( btns.value.ELEMENT);
},

'Step 4: To verify status of More link': function(browser) {

	if(length==2){
		console.log(" More link should be clicked now! \n")
		browser.useXpath()
		browser.waitForElementVisible("/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/span/div/a")
		browser.pause(4000)
		browser.useXpath()
//browser.assert.containsText('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/span/div/a','More')
browser.click('/html/body/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/span/div/a')
console.log(" More link Clicked \n")
}
else{
	console.log(" More link Absent \n")
}
},

'Step 5: To verify All radio buttons are clicked': function(browser){
	var btns1 = [];
	browser.useXpath()
	browser.pause(2000)
	browser.assert.elementPresent('//span[normalize-space(text())="Visible to all Members"]');
	browser.pause(1000)
	browser.assert.elementPresent('//span[normalize-space(text())="Visible to Members I like and to all Premium Members"]');
	browser.pause(1000)
	browser.assert.elementPresent('//span[normalize-space(text())="Only Visible to Members I like"]');
	var see1=function(elems){
var radios=elems.value; // radios is an array here, coz elems.value is an array .Value is key which contains value as array
radios.forEach(function(radio)
{
	var r=radio.ELEMENT     	
	btns1.push(radio.ELEMENT)
	browser.pause(1000)
	browser.elementIdClick(btns1[j])
	console.log( j + "is clicked")
		/*browser.elementIdSelected(btns1[j],function(check)
	{
		browser.verify.ok(check.value, + j +' Radio button is selected')
		console.log(check.value)
		browser.pause(4000)
		j++;
	}) */ 
	browser.pause(2000)
	j++;
	
})
}
browser.elements('css selector','input[type="radio"]',see1)
//browser.elementIdClick(btns1.value.ELEMENT)
},

'Step 6: To verify Settings can be changed' : function(browser)
{
	var rtns = [];
	var see3=function(elems){
		var radios=elems.value; 
		console.log("Length is " + radios.length)
browser.pause(2000)// radios is an array here, coz elems.value is an array .Value is key which contains value as array
radios.forEach(function(radio)
{
	var r=radio.ELEMENT  
	rtns.push(radio.ELEMENT)
	browser.pause(1000)
	browser.elementIdClick(rtns[k])
	browser.pause(2000)
	browser.useXpath()
	browser.waitForElementVisible('//div[normalize-space(text())="Save my settings"]',2000,function(res){
		console.log(res.value)
		if(res.value === true)
        {
            browser.pause(2000)
            browser.click('//div[normalize-space(text())="Save my settings"]')
            k++;
            browser.waitForElementVisible('//div[normalize-space(text())="Settings saved"]',7000,function(results){
            	console.log(results.value)
                    if(results.value != true)
                    { 
                      browser.waitForElementVisible('//div[normalize-space(text())="You do not have any Photos, please add Photos to proceed."]',7000,function(results){
                           if(results.value != true)
                           {
                             console.log("Not visible obviously"+ k + "radio button is the current setting, and so we cannot save setting again! \n");
                           }                     
                    	else
                    	  {                        
                         browser.assert.elementPresent('button[id="close-simple-message-modal"]')
                         browser.click('button[id="close-simple-message-modal"]')
                         console.log("Need to upload a photo!")
                          }
                    })
                }
                    else
                    {
                  console.log("success!")
                    }
            })    
   	browser.pause(1000)
  }
  else{
  	console.log("success!")
  }
})
})
}
browser.elements('css selector','input[type="radio"]',see3)

    }
    }