// 1 task
myname = "global";
function func() {
		console.log(myname); //undefined
		var myname = "local";
		console.log(myname); // local
}
func();

// 2 task
var a = 90100;
function someFunc(){
	if(false){
		var a = 1;
	} else {
		var b = 2;
	}
	console.log(b); //2
	console.log(a); //undefined
}
someFunc();

// 3 task
a(); //ok
b(); //error

// Expression
var b = function(){
 alert( 'function b');
}

// Declaration
function a(){
 alert( 'function a' );
}

// 4 task
var i = 0;

for (; i< 10; i ++) {
	console.log(i) // 0, 1, ...., 9
}

// 5-6 tasks
console.time('time');
function factorial(n){
	var res = 1;
	while(n) res *= n--;
	if ((res % 2) === 1) {
		return res;
	} else {
		return (res * 2);
	}
}
console.log( factorial(5) );
console.timeEnd('time');

// 7 task
function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
	for (var i = 0; i < 15; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

console.log(makeid());

// 8 task
function union(arr) {
	var newArr = [];
	var obj = {};
	for(var i = 0; i < arguments.length; i++){
		newArr = newArr.concat(arguments[i]);
		console.log(newArr);
	}
	for (var i = 0; i < newArr.length; i++) {
		var str = newArr[i];
		obj[str] = true; 
	}
	return Object.keys(obj);
}
console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// все как бы правильно но все числа превращаються в строки что не есть гуд(

// 9 task
function flatten(array) {
	let i = 0;
	var newarray = array.slice(0);
	while(array.length){
		i++;
		array = array.reduce( (level, el) => {
			if(Array.isArray(el)) level.push(...el);
			return level;
		}, []);
	}
	return newarray.flat(i);
}

console.log(flatten([1, [2], [3, [[[4]]]]]));

//10 task
function unique(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = true; // запомнить строку в виде свойства объекта
	}

	return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()
