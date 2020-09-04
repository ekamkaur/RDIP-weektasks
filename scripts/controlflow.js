function fibo()
{
var x = document.getElementById("no").value;
try{
	if (x <= 10 || x >= 100){
		throw x;
	}

	var f = 0;
	var s = 1;
	var t = f+s;
	for(var i = 0; i < x; i++){
		document.write(f + '\n');
		f = s;
		s = t;
		t = f+s;
	}
} catch(e) {
	document.write(e + ' is not in the required range of 10-100');
} finally {
    console.log('Program Complete');
    return false;
}
}