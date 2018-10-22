//1 task
function getLength(arr) {
	return arr.length;
}
var f = getLength(['1', '2', '3']);
console.log(f);//3

//2 task
function getArgsLength() {
	return arguments.length;
}
var c = getArgsLength('sadf', 'adsf', 'adsf', 'sadf');
console.log(c);//4

//3 task
function removeEmptyElements(arr){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])){
			arr[i] = removeEmptyElements(arr[i]);
		}else if(arr[i] === undefined){
			newArr = arr.slice(0, i).concat(arr.slice(i+1));
			arr = newArr;
		}
	}
	return arr;
}

//4 task
function sortReverse(arr){
	return arr.reverse();
}
var a = sortReverse(['1', '2', '3']);
console.log(a);

//5 task
function myDate(date){
	if(date instanceof Date === true) {	
	var obj = {
		day: date.getDate(),
		month: date.getMonth()+1,
		year: date.getFullYear()
	};
	console.log(obj);
	} else {
		console.log('error');
	}
}
var date = new Date();
myDate(date);

// 6 task
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};
function numberOfProp(obj) {
	var counter = 0;
	for (var key in obj) {
		counter++;
	}
	setTimeout(function() {
		alert(counter);
	}, 1000);
}
numberOfProp(menu);

// 7 task
function Name() {
	var value = prompt("Enter your name", "");
	if(!value) {
		var int = setInterval(function() {
			value = prompt("Please, enter your name", "");
			if(value) {
				clearInterval(int);
			}
		}, 2000)
	}	else {
			return;
	}
}
Name();
