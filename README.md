# SplunkHelper
This is a Google Chrome Browser Extension to help Splunk Cloud Engineers in their daily life.

Check out the conversation on Slack! #splunkhelper

# Installation Steps
1) Make sure Git is installed.
2) Create a Directory in which you would like the Extension to live
3) From the CLI execute the following CLI command:<br>
`git clone https://oauth2:6koZXrzozcscyrLCaAr4@cd.splunkdev.com/jprescott/splunkhelper.git`
4) Open Google Chrome and navigate to "<a hred="chrome://extensions" target="_blank">chrome://extensions</a>"
5) Enable "Developer Mode"
6) Click "Load unpacked"
7) Locate the directory in which the files were downloaded
8) Select the aforementioned directory
9) Click "Select"
10) Boom

# Submitting an Issue
To Submit an issue, please navigate here:
https://cd.splunkdev.com/jprescott/splunkhelper/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=

Please format the title following the below:
`Issue: <Description of Issue>`

# Submitting an Enhanement Request
To Submit an enhancement request, please navigate here:
https://cd.splunkdev.com/jprescott/splunkhelper/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=

Please format the title following the below:
`ER: <Description of Issue>`

# 09/09/2019 - Update 4
Updated admin.js, vault.js, script.js, manifest.json, and index.html<br>
Fixed the autofill of the "admin" username feature. Applying a value via JavaScript is not valid, and does not work as expected. <br>
Splunk also reports the proper username in the audit logs.<br>
I am unsure at this time why it behaves as such. The new behaivor is that when the Splunk Login page loads, it creates a text field with the value "admin",<br>
copies the content of the text field to the clipboard, then pastes the value. Afterwards it deletes the text field.<br><br>
Since this overwrites what's in your clipboard, I have made this a toggle feature. In the top right hand corner there is a new button labeled "Vault Clipboard Enabled"<br>
There is also a new behavior for when you click "Vault"<br>
This now opens it in a background tab.<br>
When "Vault Clipboard Enabled" is set, when you're at a Splunk Cloud login page and click "Vault" from the extension it opens Stack Creds in a background tab<br>
It then copies the password, from the background tab, to your clipboard<br>
When you click on the password input field on the Splunk Cloud login page it then pastes the password.<br>
So all you have to do it click "Sign in"<br><br>
When this is enabled, it validates that it pulled the password from Stack Creds by adding "stackCredsPWD" to the end of the password<br>
When you click on the Password Input field, it checks for the "stackCredsPWD" string.<br>
If it's there, it removes that part and sets the value.<br>

# 09/09/2019 - Update 3
Added admin.js, and vault.js, updated manifest.json<br>
Stack Creds has gotten the Dark-Mode treatment boiiiis. The extension will detect that you've launched Stack Creds and modifies the CSS to dark mode it.<br>
Also added a new file to auto-fill the username input field on Splunk Cloud login pages with "admin" so you don't have to fill the username in.<br>
<br>
# 07/17/2019 - Update 2
Updated script.js to address Issue #7<br>
<br>
# 07/08/2019 - Update 1
Updated script.js to address Issue #2<br>
Clicking on the "Stack ID" text box will now clear the text box.

Update via: 
`git clone https://oauth2:BBgKBerWUYR2JzrE1zxk@cd.splunkdev.com/jprescott/splunkhelper.git`