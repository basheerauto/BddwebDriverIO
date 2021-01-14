<p>&nbsp;</p>
<p>&nbsp;</p>
<table width="625">
<tbody>
<tr>
<td width="625">
<p><strong>WestWing </strong><strong>-Task 2 - Create a test automation script covering a provided use case on westwingnow.de</strong></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table width="623">
<tbody>
<tr>
<td width="162">
<p>Problem</p>
</td>
<td width="462">
<p>User navigate to URL: <a href="https://westwingnow.de">https://westwingnow.de</a> &nbsp;digital shopping portal to Add and Delete Product Wishlist.</p>
</td>
</tr>
<tr>
<td width="162">
<p>Features covered</p>
</td>
<td width="462">
<p><strong>Feature</strong>: User navigate to&nbsp; westwingnow digital shopping portal to Add and Delete Product wishlist</p>
<p>&nbsp;</p>
<p><strong>Background:</strong></p>
<p>&nbsp;&nbsp;&nbsp; Given I am on the WestwingNow home page</p>
<p><strong>Scenario Outline:</strong> As a user, I can log into the portal Add and Delete Product wishlist</p>
<p>&nbsp;&nbsp;&nbsp; Then verify page Title</p>
<p>&nbsp;&nbsp;&nbsp; When I search for &lt;Product&gt;</p>
<p>&nbsp;&nbsp;&nbsp; Then I should see product listing page with a list of products</p>
<p>&nbsp;&nbsp;&nbsp; When I click on wishlist icon of the first found product</p>
<p>&nbsp;&nbsp;&nbsp; When I switch to login form of the overlay</p>
<p>&nbsp;&nbsp;&nbsp; Then I log in with Username &lt;Username&gt; and Password &lt;Password&gt;</p>
<p>&nbsp;&nbsp;&nbsp; Then the product should be added to the wishlist counter</p>
<p>&nbsp;&nbsp;&nbsp; Then I go to the wishlist page</p>
<p>&nbsp;&nbsp;&nbsp; Then I delete the product from my wishlist</p>
<p>&nbsp;&nbsp;&nbsp; Then verify whishlist empty message &nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; <strong>Examples</strong>:</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Product&nbsp;&nbsp;&nbsp; | Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Password&nbsp; |</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | M&ouml;bel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |basheerahamed.career@gmail.com&nbsp; | ttest1234*|</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="162">
<p>Framework Approach</p>
</td>
<td width="462">
<p>Pageobject Model, BDD Cucumber, Junit.</p>
</td>
</tr>
<tr>
<td width="162">
<p>Tools</p>
</td>
<td width="462">
<p>WebdriverIO Version-6</p>
</td>
</tr>
<tr>
<td width="162">
<p><strong>Run Command</strong></p>
</td>
<td width="462">
<p>&ldquo;$ npm run test&rdquo;</p>
</td>
</tr>
<tr>
<td width="162">
<p>DevDependencies</p>
</td>
<td width="462">
<p>"devDependencies": {</p>
<p>&nbsp;&nbsp;&nbsp; "@babel/cli": "^7.12.10",</p>
<p>&nbsp;&nbsp;&nbsp; "@babel/core": "^7.12.10",</p>
<p>&nbsp;&nbsp;&nbsp; "@babel/preset-env": "^7.12.11",</p>
<p>&nbsp;&nbsp;&nbsp; "@babel/register": "^7.12.10",</p>
<p>&nbsp;&nbsp;&nbsp; "@wdio/cli": "^6.11.3",</p>
<p>&nbsp;&nbsp;&nbsp; "@wdio/cucumber-framework": "^6.11.1",</p>
<p>&nbsp;&nbsp;&nbsp; "@wdio/local-runner": "^6.11.3",</p>
<p>&nbsp;&nbsp;&nbsp; "@wdio/spec-reporter": "^6.11.0",</p>
<p>&nbsp;&nbsp;&nbsp; "chromedriver": "^87.0.5",</p>
<p>&nbsp;&nbsp;&nbsp; "wdio-chromedriver-service": "^6.0.4",</p>
<p>&nbsp;&nbsp;&nbsp; "webdriverio": "^6.11.3"</p>
<p>&nbsp; }</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
