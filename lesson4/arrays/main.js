// 1 task
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
var str = "Мама мыла раму";
var newArr = str.split('');
var array = [];
for(var i = 0; i < str.length; i++) {
	var c = arr.indexOf(newArr[i]);
	array.push(arr[c]);
	arr.splice(c, 1);
}
arr.splice(0, arr.length);
arr = array;
console.log(arr);
var string = array.join('');
console.log(string);


// 2 task
function isPal(string){
	var arr = [];
	var arrRev = [];
	var strRev
	string = string.replace(/\s/g, '');
	string = string.toLowerCase();
	for (var i = 0; i < string.length; i++) {
		arr.push(string[i]);
	}
	arrRev = arr.reverse();
	strRev = arrRev.join('');
	if (string === strRev)
		return true;
	else
		return false;
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

// 3 task
function anClean(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].toLowerCase().split('').sort().join('') === arr[j].toLowerCase().split('').sort().join('')) {
				arr.splice(j, 1);
				j -= 1;
			}
		}
	}
	return arr;
}

var array = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'кибогр', 'кибогр', 'сектор'];

console.log(anClean(array)); 

// 4 task
var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
function reverseArr(arr){
	arr = arr.join('');
	console.log(arr);
	arr = arr.split('').reverse();
	console.log(arr);
	for(var i = 0; i < arr.length; i++){
		if(arr[i].toUpperCase() === arr[i]){
			var char = " "+arr[i];
			arr.splice(i, 1, char);
		}
	}
	arr = arr.join("");
	return arr;	
}

console.log(reverseArr(arr));

//5 task
function Sum1(from, to){
	var sum = 0;
	for(var i = from; i <= to; i++){
		sum += i;
	}
	return sum;
}
var sum1 = Sum1(1, 100);
console.log(sum1);

function Sum2(from, to){
	var sum = 0;
	for(var i = from; i <= to; i++){
		if (i % 2 == 0) {
			sum += i;			
		}
	}
	return sum;
}
var sum2 = Sum2(0, 100);
console.log(sum2);

// 6 task 
function callMe(x, y, z){
	if(typeof x  === "number") {
		console.log(x + y + z);		
	}else {
		console.error("Тут текст ошибки");
		return null;		
	}
}

var x = callMe("d", 2, 3);
console.log(x);


// 7 task
function callMeAgain(array){
	return array = array.sort().join(',');
}
array = ['d', 'a', 'l', 'u', 'y'];
console.log(callMeAgain(array));

// 8 task
function arraySort(arr1) {
  return arr1.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    } else if (a.age < b.age) {
      return -1;
    } else return 0;
  });
}

var arr = [
   {name: "L1", age: 45},
   {name: "L1", age: 20},
   {name: "L1", age: 10},
   {name: "L1", age: 78},
   {name: "L1", age: 41},
   {name: "L1", age: 10}
];

console.log(arraySort(arr));

// 9 task	
// var oldarr = arraySort(arr);
// function addPerson(){
// 	var name = prompt("Your name", "L1");
// 	var age = prompt("Your age", "10");
// 	var exist = false;
// 	for (var i = 0; i < oldarr.length; i++) {
// 		if(oldarr[i].name == name && oldarr[i].age == age){ 
// 			alert("Такой пользователь уже существует");
// 			exist = true;
// 			break;
// 		}
// 	}
// 	if(!exist){
// 		oldarr.push({name: name, age: +age});
// 	}
// 	return oldarr.sort(function (a, b) {
//     if (a.age > b.age) {
//       return 1;
//     } else if (a.age < b.age) {
//       return -1;
//     } else return 0;
//   });;
// }
// console.log(addPerson());

// 10 task
var arr = [13, 35, 3, 443, 39, 98733];
function count3(arr){
	arr = arr.join('');
	arr = arr.match(/3/g).length;
	return arr;
}
console.log(count3(arr));

// 11 task
var arr = ['1', '2', '3', '4', '5', '6'];
function task11(arr){
	var newarr = [];
	while(arr.length > 0){
		newarr.push(arr.shift());
		newarr.push(arr.pop());
		newarr.push('-');
	}
	newarr.pop();
	return newarr.join('');
}
console.log(task11(arr));

// 12 task
var a = [1,2,3,4,4,4];
var b = [4,5,6];
function sumArrays(a,b){
	if(a.length > b.length) {
		var c = [];
		while(a.length > b.length){
			b.push(0);
		}
	} else if(a.length < b.length) {
		a.push(0);
	}
	for(var i = 0; i < b.length; i++) {
		c.push(a[i]+b[i]);
	}
	return c;
}
console.log(sumArrays(a,b));

// 13 task
function deleteElement(arr, el){
	var str = arr.join("");
	var regex = new RegExp(el, 'g');
	str = str.replace(regex,"");
	arr = str.split("");
	return arr;
}
var arr = [1,2,3,4,3,3];
console.log(deleteElement(arr, 3));

// 14 task
var a = [1, 2, 3];
var b = [101, 2, 1, 10];
var c = [2, 1];
function intersection(a, b, c){
	var narr=[];
	for (var i = 0; i < a.length; i++) {
		if(b.includes(a[i]) && c.includes(a[i])){
			narr.push(a[i]);
		}
	}
	return narr;
}
console.log(intersection(a, b, c));

// 15 task
var arr = [2, 3, 1, 4];
function task15(arr){
	let narr = [];
	for(let i in arr) {
		for(let j = 0; j < arr[i]; j++){
			narr.push(arr[i]);
		}
	}
	return narr;
}
console.log(task15(arr));

// 16 task
var arr = [1,2,3];
var n = 6;
function task16(arr, n) {
	while(arr.length < n) {
		arr.push(0);
	}
	return arr;
}
console.log(task16(arr, n));

// 17 task
// 17.1
var myarr = [ 0, 15, -2, 3, -99, -69, -69, -3];
function unique(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  } 
    var res = Object.keys(obj);
    res.sort(function(a, b) {
     return a - b;
 });
  return res} 
console.log(unique(myarr).slice(0, 3)); 

// 17.2
var myarr = [ 0, 15, -2, 3, -99, 69, -69, -3];
var negArr = myarr.filter(function(num) {
return num < 0;
});
console.log(negArr.slice(0,3))