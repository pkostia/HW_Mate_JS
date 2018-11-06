// 1 task
var a = 10;
var b = 3;
var c;
c = a % b;
console.log(c);

// 2 task
var a = 10;
var b = 3;
var c;
if(a % b == 0){
	c = a/b;
	console.log(`Делится. Результат: ${c}`);
} else {
	c = a % b;
	console.log(`Делится с остатком. Остаток: ${c}`);
}

// 3 task
var a = 10;
var b = 3;
var c;
c = Math.abs(a) - Math.abs(b);
console.log(c);

// 4 task
var a = 379;
var c;
c = Math.sqrt(a);
console.log(c);
console.log(c.toFixed(0));
console.log(c.toFixed(1));
console.log(c.toFixed(2));

// 5 task
console.log(Math.round(Math.random()*100+1));

// 6 task
var a = 1;
var b = 4;
var c = 2;
function descr(a, b, c) {
	var x, x1, x2, d;
	d = Math.pow(b, 2) - 4*a*c;
	if(d < 0) {
		console.log('Корней нет')
	} else if(d === 0) {
		return x = -b/(2 * a);
	} else if (d > 0) {
		x1 = (-b + d)/(2 * a);
		x2 = (-b - d)/(2 * a);
		return `x1 = ${x1}; x2 = ${x2}`;
	}
}
console.log(descr(a, b, c));

// 7 task
function isPrime(a) {
	for (var i = a-1; i > 1; i--) {
		if(a % i === 0) return `${a} is not prime number`;
	}
	return `${a} is prime number`;
}
console.log(isPrime(6));

// 8 task
nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }

// 9 task
var arr9 = [];
while(arr9.length < 10) {
	arr9.push(Math.round(Math.random()*100));
}
console.log(arr9);

// 10 task
var now = new Date();
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);

// 11 task
var date = new Date();
console.log(date.toLocaleString("ru", {month: 'long'}));

// 12 task
function addZero(){
	var date = new Date();
	var arr = [];
  arr.push(date.getHours());
  arr.push(date.getMinutes());
  arr.push(date.getSeconds());
  arr.push(date.getDate());
  arr.push(date.getMonth()+1);
	arr.push(date.getFullYear());
  for (var i = 0; i < arr.length; i++){
  	if (arr[i] < 10) {
  		arr[i] = '0'+arr[i];
  	}
  }
  return `${arr[0]}:${arr[1]}:${arr[2]} ${arr[3]}.${arr[4]}.${arr[5]}`;
}
console.log(addZero());

// 13 task
var date = new Date(2015, 1, 7);
var weekday = date.toLocaleString('ru', { weekday: 'long' });
console.log(weekday);

// 14 task
var date = new Date();
var min = (date.getTime()/3600).toFixed();
console.log(min);

// 15 task
function secToDate(sec){
  var dd = Math.floor(sec/86400);
  sec = sec%86400;
  var hour = Math.floor(sec/3600);
  sec = sec%3600;
  var min = Math.floor(sec/60);
  sec = sec%60;
  console.log(dd + ' day(s) '+ hour + ' hour(s) '+ min + ' min ' + sec + ' sec');
}
secToDate(165245424)