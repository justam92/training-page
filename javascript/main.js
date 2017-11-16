function countingDown(){
var today = today.getDate();
var month = today.getMonth();
var year = today.getYear();

var hour = today.getHours();
var minute = today.getMinute();
var second = today.getSecond();

document.getElementById("time").innerHTML{
today+"/"+month+"/"+year+"|"+hour+":"+minute+":"+second;

setTimeout("countingDown()",1000);
}