var users = [];

var signin = function(name, age, callback){
	if(!name || !age){
		console.log('가입실패! 이름, 나이를 입력하세요.');
		return;
	}
	for(var i=0;i<users.length;i++){
		if(users[i].name === name){
			console.log('가입실패! 이미 가입한 회원입니다.');
			return;
		}
	}

	var user = {name: name, age: age};
	users.push(user);
	console.log('가입성공!');
	callback();
	return;
}
var signout = function(name, callback){
	if(!name){
		console.log('탈퇴실패! 이름을 입력하세요.');
		return;
	}
	for(var i=0;i<users.length;i++){
		if(users[i].name === name){
			users.splice(i,1);
			console.log('탈퇴성공!');
			callback();
			return;
		}
	}
	console.log('탈퇴실패! 이미 탈퇴한 회원이거나 가입한 적이 없습니다');
	return;
}

var printUsers = function(){
	console.log(' ****회원가입 현황****');
	for(var i=0; i<users.length; i++){
		console.log(users[i]);
	}
	console.log('**********************');
}

// signin('a',10,printUsers);
// signin('b',20,printUsers);
// signout('a',printUsers);

signin('a',10,function(){
	console.log('가입이 끝나고 콜백함수를 호출');
	printUsers();
});