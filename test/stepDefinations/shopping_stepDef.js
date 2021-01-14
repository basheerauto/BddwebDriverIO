import{Given,When,Then} from 'cucumber';
import webBrowser from "../pageObjects/webBrowser";
import shoppingpage from"../pageObjects/shoppingpage";



Given(/^I am on the WestwingNow home page$/, function(){
   webBrowser.OpenBrowser();
   
});

Then(/^verify page Title(.*)$/, async => {
    expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow')
    webBrowser.Acceptcookies();
   
});

When(/^I search for (.*)$/, async (search) => {
   await shoppingpage.search(search)
   await browser.pause(2000);
});


Then(/^I should see product listing page with a list of products$/,async() =>{
    await shoppingpage.listofproducts();
    await browser.pause(2000);
 });

 Then(/^I click on wishlist icon of the first found product$/,async() =>{
    await shoppingpage.ClickWishListIcon();
    await browser.pause(2000);
    
 });

 When(/^I switch to login form of the overlay$/,async() =>{
   await shoppingpage.switchloginoverlay();
   await browser.pause(2000);
   
});


 Then(/^I log in with Username (.+) and Password (.+)$/, async (Username, Password) => {
   await shoppingpage.userlogin(Username,Password);
});

Then(/^the product should be added to the wishlist counter$/,async() =>{
   await shoppingpage.verifywhishlistitem();
   await browser.pause(2000);
   
});

Then(/^I go to the wishlist page$/,async() =>{
   await shoppingpage.wishlistdashboardlink();
   await browser.pause(2000);
   
});

Then(/^I delete the product from my wishlist$/,async() =>{
   await shoppingpage.deletewhishlist();
   await browser.pause(2000);
   
});

Then(/^verify whishlist empty message$/,async() =>{
   await shoppingpage.wishlistemptymsg();
   await browser.pause(2000);
   
});