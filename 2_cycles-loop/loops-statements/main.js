// 1 task
for (var i = 0; i <= 15; i++) {
	if(i % 2 == 0) {
		console.log(i + ' is even');
	} else {
		console.log(i + ' is odd');
	}
}

// 2 task
for (var i = 1; i <= 100; i++) {
	if(i % 5 == 0 && i % 3 == 0){
		console.log('FizzBuzz');
	} else if(i % 5 == 0) {
		console.log('Buzz');
	}	else if(i % 3 == 0) {
		console.log('Fizz');
	} else {
		console.log(i);
	}
}

// 3 task
function egcd(a, b) {
	if (a == 0)
	return b;
	while (b != 0) {
		if (a > b)
			a = a - b;
		else
			b = b - a;
		}
		return a;
}
console.log(egcd(16, 28));

// 4 task
var sum = 0;
for (var i = 1; i <= 1000; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		sum += i;
	}
}
console.log(sum);

// 5 task
for(var i = 10; i <= 90; i++){
	if(i % 3 == 0 && i % 5 == 0)
		console.log(i);
}

// 6 task
for(var i = 70; i >= 11; i--) {
	if(i % 2 == 1)
		console.log(i);
}

// 7 task
for(var i = 78; i >= 13; i--) {
	if(i % 2 == 0 && i % 3 == 0)
		console.log(i);
}
