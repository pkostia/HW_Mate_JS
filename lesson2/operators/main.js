// 1 task
var r = '9' + 0; // 90, string
console.log(r);
console.log(typeof r);
var r = 9 + '0'; // 90, string
console.log(r);
console.log(typeof r);
var r = 4 + 9; // 13, number
console.log(r);
console.log(typeof r);
var r = null + 7; // 7, number
console.log(r);
console.log(typeof r);
var r = '6' + null; // 6null, string
console.log(r);
console.log(typeof r);
var r = '6' + []; // 6, string
console.log(r);
console.log(typeof r);
var r = '6' + null; // 6null, string
console.log(r);
console.log(typeof r);

// 2 task
console.log(2/3 + 1 + 1/3 == 2); //false
/*in the IEEE 754 standard, the number is 8 bytes 
(= 64 bits), no more and no less.
1/3, 2/3 are infinite fraction in binary number system.
The binary value of the infinite fractions is stored 
only up to a certain sign, so inaccuracy occurs.*/

// 3 task
var r = 6 && 0 && 7; // 0
console.log(r);
var r = -9 && -8; // -8
console.log(r);
var r = 6 && 0 && 7; // 0
console.log(r);
var r = "string" && 0; // 0
console.log(r);
var r = [] && {} && 7; // 7
console.log(r);
var r = [] || 7; // []
console.log(r);
var r = {} || 0; // {}
console.log(r);
var r = false || true; // true
console.log(r);
var r = "2" > "3"; // false
console.log(r);
var r = "ab" <= "fg"; // true
console.log(r);
var r = "2k" <= "8l"; //true
console.log(r);
var r = "2" != 2; // false
console.log(r);
var r = "2" !== 2; // true
console.log(r);
var r = ++2 + 2; // 5
console.log(r);
var r = ++2 + 2--; // 5
console.log(r);
var r = 1++ - 2--; // -1
console.log(r);