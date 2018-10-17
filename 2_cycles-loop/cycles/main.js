// 1 task
for(var i = 1; i <= 50; i++) {
	console.log(i)
}

// 2 task
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// 3 task
var result = 1;
var a = [2, 3, 4, 5];
for(var i = 0; i < a.length; i++) {
	result = result * a[i];
}
console.log(result);

// 4 task
var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
}
for(var key in obj){
	console.log(key + ' - это ' + obj[key]);
}

// 5 task
var n = 1000;
var num = 0;
while (n > 50) {
	n /= 2;
	num++;
}
console.log(n);
console.log(num);

// 6 task
var array = [2, 5, 9, 15, 0, 4];
for(var i = 0; i < array.length; i++){
	if(array[i] > 3 && array[i] < 10) {
		console.log(array[i])
	}
}

// 7 task
var monthes = ['January','February','March','April','May','June','July','August','Septembet','October','November','December'];
var date = new Date();
var month = date.getMonth();
console.log(month);
for(var i = 0; i < monthes.length; i++){
	if (i == month) {
		console.log(monthes[i].bold());
	} else {
		console.log(monthes[i]);
	}
}
