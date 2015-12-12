var user1 = {name : "aaaa", age: 10, item: ['item1','item2']};
var user2 = {name : "bbbb", age: 10, item: ['item1','item2']};
var user3 = {name : "cccc", age: 10, item: ['item1','item2']};
var user4 = {name : "dddd", age: 10, item: ['item1','item2']};

var users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

//users.pop(); 뒤부터 삭제 (갯수)
//users.splice(1,2);

for(var i=0;i<users.length;i++){
	if(users[i].name === 'aaaa'){ // === : 타입까지 본다.
		console.log('이름은'+users[i].name+"입니다.");
		console.log('나이은'+users[i].name+"입니다.");
		console.log('아이템은'+users[i].name+"입니다.");
		console.log('---------------------------------');
		break;
	}

}