var foo = [1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<10;i++){
	console.log(i,foo[i]);
}

for(var i=0;i<10;i++){
	console.log(i,foo[i]*2);
}

var bar =[];
for(var i=0;i<10;i++){
	bar.push(foo[i]);
}
console.log(bar);