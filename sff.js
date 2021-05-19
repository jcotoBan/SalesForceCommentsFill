function fFields () {
//Problem analysis: pg:addCommentF:addCommentPB:rptOrder:1:customFieldsPBS:j_id91:1:j_id92
//Problem statement: pg:addCommentF:addCommentPB:rptOrder:1:customFieldsPBS:j_id91:0:j_id92
//Next actions: pg:addCommentF:addCommentPB:rptOrder:1:customFieldsPBS:j_id91:2:j_id92


var pstmtT = //problem statement text
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:0:j_id94").textContent;

var paT = //problem analysis text
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:1:j_id94").textContent;

var naT = //next actions text
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:2:j_id94").textContent;


var pstmt = //problem statement
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:0:j_id94");

var pa = //problem analysis
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:1:j_id94");

var na = //next actions
document.
getElementById("pg:addCommentF:addCommentPB:rptOrder:2:customFieldsPBS:j_id93:2:j_id94");



var str;


var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.toLocaleString('en-US', { hour: 'numeric', minute:'2-digit', hour12: true });
var dateTime = date+' '+time;

var tm = geTz();

tz = tm.match( /\b\w/g ) // Match first letter at each word.
       .join( "" )
       .toUpperCase();


if(pstmtT.length == 0){

str = "Issue Description: ";
str += "\n\nFrequency/Start Date: ";
str += "\n\nWorking theory: ";
var temp = document.createTextNode(str);
pstmt.appendChild(temp);
}

str = "";


if(paT.length == 0){
str = "/******************************/\nDate\/time: " + dateTime +" "+tz;   
str += "\n\nTheory: ";
str += "\n\nError: ";
str += "\n\nDocs/Refs: ";
str += "\n\nChanges Made/Recommended: ";
str += "\n\n";

temp = document.createTextNode(str);
pa.appendChild(temp);   

}else{

	if(paT.match(/\/\/*.+(?:.|[\r\n])+?(?=\/.+\*)/))	
	str = paT.match(/\/\/*.+(?:.|[\r\n])+?(?=\/.+\*)/); 

str = str.toString().replace(/\d.+\/.+\d+:+\d+\s+\w+\s+\w+/, dateTime +" "+tz);

temp = document.createTextNode(str);

pa.prepend(temp);

}

str = "";

if(naT.length == 0){
str = "/******************************/\nDate\/time: " + dateTime +" "+tz;	
var temp = document.createTextNode(str);
na.appendChild(temp);
}else{
str = naT;	
str = str.toString().replace(/\d.+\/.+\d+:+\d+\s+\w+\s+\w+/, dateTime +" "+tz);
na.textContent=str;
}


}


function geTz() 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}



fFields();