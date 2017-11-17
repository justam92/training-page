function startTime(){
	var day = new Date();

	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();

	minute = checkTime(minute);
	second = checkTime(second);

	document.getElementById("time").innerHTML{
	hour+":"+minute+":"+second;

	var t = setTimeout("startTime()",1000);
}
function checkTime(i) {
	if (i < 10) {i = "0" +1};
	return i;
}