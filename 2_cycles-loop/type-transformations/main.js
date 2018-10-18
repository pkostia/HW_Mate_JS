// 1 task
var one = "1" + 2 + 3;
console.log(one); // 123
var two = 4 + false + "5" + 6;
console.log(two); // 456
var three = 7 + true + 6 + "8";
console.log(three); // 148
var four = false + true;
console.log(four); // 1

// 2 task
var t = 0;
var h = 8;

var c = t && h && 9;
console.log(c); // 0
// тут результат будет 0

// 3 task
var pr = 9;
var g = 0;

var tra = (g || pr) && 9;
console.log(tra); // 0
// тут тоже результат будет 0

// 4 task
var i = '1';
var j = 8;
var m = 7;

(m - j) == j;
console.log((m - j) == j); // false
(m - j) === j;
console.log((m - j) === j); //false

(m - 6) && j && console.log('Hi'); // Hi
// тут тоже результат будет 'Hi'

// 5 task
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;
delete obj.i;

console.log(phrase); // hello

// 6 task
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var num = obj.i.y;

obj.i.y = obj.i.y + 1;

console.log(num, obj.i.y); // 9, 10

// 7 task
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var arr = obj.h;

obj.h[1] = 9;

console.log(arr[1], obj.h[1]); // 9, 9
