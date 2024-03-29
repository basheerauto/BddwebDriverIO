
//@author:  Basheer Ahamed
//@version 1.0
//@since   01/14/2021 




import webBrowser from "../pageObjects/webBrowser";

class shoppingpage{

    //################ Locators Defined #################################

    get searchproducts  () { return $('//input[@placeholder=\'Produktsuche...\']') }
    get productlist  () { return $('//div[contains(text(),\'Produkte\')]') }
    get addwishlisticon  () { return $('(//*[local-name()=\'svg\'])[12]') }
    get wishlistitemadded (){return $('//span[contains(@class,\'CountBubble__StyledBadgeCount\')]')}
    get username (){return $('//input[@name=\'email\']')}
    get password (){return $('//input[@name=\'password\']')}
    get newlettercheck (){return $('//input[@name=\'isNewsletterSubscribed\']')}
    get termcheck (){return $('//input[@name=\'isTermsAccepted\']')}
    get registertxt (){return $('//button[contains(text(),\'Registrieren\')]')}
    get loginoverlay(){return $('//p[contains(@class,\'StyledTitle___default-sc\')]')}
    get whishlist(){return $('//span[normalize-space()=\'Wunschliste\']')}
    get deleteicon(){return $('(//button[contains(@class,\'blockListProduct__delete\')])[1]')}
    get wishlistdeletemsg() {return $('//p[contains(@class,\'wishlistNoProducts\')]')}
    get cookieschk() { return $('//button[normalize-space()=\'Cookies akzeptieren\']')}

    //################ Product Search function #################################
        async search (search) 
        {
            (await this.searchproducts).click
            await browser.pause(2000);
            await (await this.searchproducts).setValue(search);
            await(await this.searchproducts).keys('Enter')
            webBrowser.Acceptcookies();
        }
        //################ Find list of product function #################################
         async listofproducts()   
         {            
            browser.pause(2000);
            const newLocal = await(await this.productlist).getText()
            console.log("Total number of product avilabe="+newLocal)
            browser.pause(2000);
        }

        //################ Click first product wishlist icon function ######################      
           async ClickWishListIcon() 
        {
            webBrowser.Acceptcookies()
            await browser.pause(2000);
            await(await this.addwishlisticon).click();
            browser.pause(2000);
            await browser.pause(2000);
            
        }
        //################ switch to user login overlay function ######################   
        async switchloginoverlay()
        {
            await browser.pause(2000);
            const overlay=await(await this.loginoverlay).isExisting();
            console.log("User login overlay exist="+overlay)

        }
        //################ Existing user login function ######################    
            async userlogin (Username,Password) 
        {
            await browser.pause(2000);
            await (await this.username).setValue(Username);
            await browser.pause(2000);
            await (await this.password).setValue(Password);
            await(await this.newlettercheck).click();
            browser.pause(1000); 
            await(await this.termcheck).click();            
            browser.pause(2000);
            (await this.registertxt).click();
            await browser.pause(2000);
        }
        //################ verify selected item addded in whishlist function  ###################### 
        async verifywhishlistitem()
        {
            const wlist = await(await this.wishlistitemadded).getText()
            console.log("List of products added in the wishlist="+wlist)
            browser.pause(1000); 
        }
        //################ Navigate to wishlist dashboard function  ###################### 
        async wishlistdashboardlink()
        {
            const whlist=await(await this.whishlist).isExisting();
            console.log("whishlist dashboard link exist="+whlist)
            await(await this.whishlist).click(); 

        }
         //################ Delete selected whislist  function  ###################### 
        async deletewhishlist()
        {
            browser.pause(1000); 
            const delicon=await(await this.deleteicon).isExisting();
            console.log("Wishlist Delete Icon exist="+delicon)
            await(await this.deleteicon).click();

        }
        //################ Verify empty whishlist message function  ######################
        async wishlistemptymsg()
        {
            await browser.pause(3000);
            const delmsg = await(await this.wishlistdeletemsg).getText()
            console.log("wishlist empty message="+delmsg)

        }
}

export default new shoppingpage();