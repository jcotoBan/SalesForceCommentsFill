
function copyStringToClipboard (str) {
   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);

}


document.getElementById('sff').addEventListener('click', function() {
chrome.tabs.executeScript(null, {file: "sff.js"});
});


document.getElementById('pA').addEventListener('click', function() {

var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.toLocaleString('en-US', { hour: 'numeric', minute:'2-digit', hour12: true });
var dateTime = date+' '+time;
var tm = geTz();

tz = tm.match( /\b\w/g ) // Match first letter at each word.
       .join( "" )
       .toUpperCase();

str = "/******************************/\nDate\/time: " + dateTime +" "+tz;   
str += "\n\nTheory: ";
str += "\n\nError: ";
str += "\n\nDocs/Refs: ";
str += "\n\nChanges Made/Recommended: ";
str += "\n\n";

copyStringToClipboard(str);
});


document.getElementById('pStt').addEventListener('click', function() {
str = "Issue Description: ";
str += "\n\nFrequency/Start Date: ";
str += "\n\nWorking theory: ";	
copyStringToClipboard(str);
});


document.getElementById('nA').addEventListener('click', function() {
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.toLocaleString('en-US', { hour: 'numeric', minute:'2-digit', hour12: true });
var dateTime = date+' '+time;
var tm = geTz();

tz = tm.match( /\b\w/g ) // Match first letter at each word.
       .join( "" )
       .toUpperCase();	
str = "/******************************/\nDate\/time: " + dateTime +" "+tz;	
copyStringToClipboard(str);

});


/*jcoto@splunk.com*/




