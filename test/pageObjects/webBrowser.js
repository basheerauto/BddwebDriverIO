
//@author:  Basheer Ahamed
//@version 1.0
//@since   01/14/2021 



class webBrowserPage{


    get cookieschk() { return $('//button[normalize-space()=\'Cookies akzeptieren\']')}
    //############################# Open Browser with URL Function ##########################    
     async OpenBrowser()
     {
         
         browser.url("https://www.westwingnow.de");        
        expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow')       
        browser.maximizeWindow();   
         

    }
    //############################# Click cookies popup function ########################## 
    async Acceptcookies() 
        {
            await browser.pause(4000);
            (await this.cookieschk).click();            
            
        }


}
export default new webBrowserPage();