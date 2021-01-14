#####@author: Basheer Ahamed
######@version 1.0
######@since   01/14/2021 
#######@//Product flow feature file.


Feature: User navigate to  westwingnow digital shopping portal to Add and Delete Product wishlist

Background:
    Given I am on the WestwingNow home page


Scenario Outline: As a user, I can log into the portal Add and Delete Product wishlist
    Then verify page Title
    When I search for <Product>
    Then I should see product listing page with a list of products
    When I click on wishlist icon of the first found product
    When I switch to login form of the overlay
    Then I log in with Username <Username> and Password <Password>
    Then the product should be added to the wishlist counter
    Then I go to the wishlist page
    Then I delete the product from my wishlist
    Then verify whishlist empty message 
 
    Examples: 
      | Product    | Username                       | Password  |
      | Möbel      |basheerahamed.career@gmail.com  | ttest1234*|