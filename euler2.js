#print fibonacci using loop
function printfib(){
	var prev=1;
	var swap;
	for(var i=1; i<200;){
		console.log(i);
		swap=i;
		i+=prev;
		prev=swap;
	}
}
printfib();
		
