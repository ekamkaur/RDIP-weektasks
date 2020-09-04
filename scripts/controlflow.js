function fibo()
{
var x = document.getElementById("no").value;
if (x >= 10 && x <= 100){
	console.log("Yes");
}
else{
	console.log("No");
}
var f = 0;
var s = 1;
var t = f+s;
for(var i = 0; i < x; i++){
	document.write(f+'\n');
	f = s;
	s = t;
	t = f+s;
}
}