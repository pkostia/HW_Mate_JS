// 1 task
function askName() {
	var res = prompt("Как ваше имя?", "kostia");
	this.name = res;//kostia
}
askName();//this: Window
var obj = {};
obj.askName = function() {
	var res = prompt("Как ваше имя?");
	this.name = res;
};
obj.askName();//this: Object

// 2 task
function sumTo(n) {
	var result = 0;
	while(n) {
		result += n;
		n--;
	}
	return result;
}
console.log(sumTo(7)); // 28

// 3 task
function min(a, b) {
	return a < b ? a : b;
}
console.log(min(20, 39));

// 4 task
var object = {
	get getDouble() {
		return this.val / 3;
	},
	set getDouble(n) {
		this.val = n * 2;
	}
};

Object.defineProperty(object, "number", {value: 9, enumerable: false});
Object.defineProperty(object, "cantDelete", {value: 4, configurable: false});
object.getDouble = 60;
console.log(object.getDouble);

// 5 task
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];
function sortAge(arr){
	arr = arr.sort(function(a,b){
		if(a.age > b.age) {
			return 1;
		}
	});
	return arr;
}
people = sortAge(people);

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6

// 6 task
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