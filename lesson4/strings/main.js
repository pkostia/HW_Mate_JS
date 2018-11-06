// 1 task
var str = 'aaa@bbb@ccc';
var str = str.replace(/@/g, '!');
console.log(str);

// 2 task
var string = 'aaa bbb ccc';
var b = string.substr(4, 3);
console.log(b);
var c = string.substring(4, 7);
console.log(c);
var d = string.slice(4, 7);
console.log(d);

// 3 task
var date = '2025-12-31';
var newDate = date.split('-').reverse().join('/');
console.log(newDate);

// 4 task
var four = 'js';
four = four.toUpperCase();
console.log(four);

// 5 task
var five = 'я учу javascript!';
var five = five.length;
console.log(five);

// 6 task
var str = 'skdhfkjasdhfjkasdkfljalsdk';
var n = 10;
function cutStr(str, n) {
	if (str.length > n) {
		return str.slice(0, n - 3) + '...';
	}
	return str;
}
console.log(cutStr(str, n));

// 7 task
var str = 'я учу javascript!';
var arr = str.split(' ');
console.log(arr);

// 8 task
var arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+'));

// 9 task
var str = "sadfsad asdf asdsdaf";
str = str[0].toUpperCase() + str.slice(1);
console.log(str);

// 10 task
var str = "asdfasdfasdf sdafsa sadfasd sadf";
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
	arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
var str = arr.join(' ');
console.log(str);

// 11 task
var str = 'var_test_text';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
	arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
var str = arr.join('');
console.log(str);

// 12 task
function trnsf(str){
	var arr = str.split('');
	for(var i = 0; i < arr.length; i++){
		if(arr[i].toUpperCase() === str[i]){
			var char = "_"+str[i].toLowerCase();
			arr.splice(i, 1, char);
		}
	}
	str = arr.join("");
	return str;
}
str = 'varTestText';
console.log(trnsf(str));

// 13 task
function cut3(numb){
	arr = numb.split("");
	for (var i = arr.length-1; i !=0; i--) {
    if (i%3==0){
			arr.splice(arr.length-i, 0, ' ');
		}
    if (i%3==0 && i==3){
      arr.splice(0, 0, '');
    }
	}
	numb = arr.join('');
	return numb;
}
numb = '56234536403435622524';
console.log(cut3(numb));

