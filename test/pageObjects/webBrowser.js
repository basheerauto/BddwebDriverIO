class webBrowserPage{


    get cookieschk() { return $('//button[normalize-space()=\'Cookies akzeptieren\']')}

     async OpenBrowser()
     {
         
         browser.url("https://www.westwingnow.de");        
        expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow')       
        browser.maximizeWindow();   
         

    }

    async Acceptcookies() 
        {
            await browser.pause(3000);
            (await this.cookieschk).click();            
            
        }


}
export default new webBrowserPage();