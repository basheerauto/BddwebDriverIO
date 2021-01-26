<p>&nbsp;</p>
<p>&nbsp;</p>
<table style="width: 1019.03px;">
	<tbody>
		<tr>
			<td style="width: 1009.03px;"><span style="color: #0000ff;"><strong>WestWing</strong> <strong>- Create a test automation script covering a provided use case on westwingnow.de</strong></span></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>
<table style="width: 1024.79px;">
	<tbody>
		<tr>
			<td style="width: 158px;">
				<p>Problem</p>
			</td>
			<td style="width: 851.789px;">
				<p>User navigate to URL: <a href="https://westwingnow.de">https://westwingnow.de</a> &nbsp;digital shopping portal to Add and Delete Product Wishlist.</p>
			</td>
		</tr>
		<tr>
			<td style="width: 158px;">
				<p>Features covered</p>
			</td>
			<td style="width: 851.789px;">
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
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Product&nbsp;&nbsp;&nbsp; | Username&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Password&nbsp; |</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | M&ouml;bel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |basheerahamed.career@gmail.com&nbsp; | ttest1234*|</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td style="width: 158px;">
				<p>Framework Approach</p>
			</td>
			<td style="width: 851.789px;">
				<p>Pageobject Model, BDD Cucumber, Junit.</p>
			</td>
		</tr>
		<tr>
			<td style="width: 158px;">
				<p>Tools</p>
			</td>
			<td style="width: 851.789px;">
				<p>WebdriverIO Version-6</p>
				<p>Java Script</p>
				<p>Gherkin</p>
				<p>NodeJS</p>
				<p>Chrome Driver</p>
			</td>
		</tr>
		<tr>
			<td style="width: 158px;">
				<p><strong>Run Command</strong></p>
			</td>
			<td style="width: 851.789px;">
				<p>&ldquo;$ npm run test&rdquo;</p>
			</td>
		</tr>
		<tr>
			<td style="width: 158px;">
				<p>DevDependencies</p>
			</td>
			<td style="width: 851.789px;">
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
