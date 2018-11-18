// 1 task
var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

rabbit.eat(); // full in rabbit

// 2 task
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // true

delete rabbit.jumps;
alert( rabbit.jumps ); // null

delete animal.jumps;
alert( rabbit.jumps);  // undefined

// 3 task
var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);
//head.glasses and pockets.glasses will work equally fast

// 4 task
function Rabbit() { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); //true
А если код будет такой? (заменена одна строка):

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*)

alert(rabbit.eats); //false
А такой? (заменена одна строка)

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert(rabbit.eats); //undefined

// 5 task
function Rabbit() { }
Rabbit.prototype.test = function() { alert(this); }

var rabbit = new Rabbit();

rabbit.test();
rabbit.__proto__.test();
Rabbit.prototype.test();
Object.getPrototypeOf(rabbit).test();

// 6 task
function Hamster() {
	this.food = [ ]; // пустой "живот"
}


Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert(speedy.food.length); // 2
alert(lazy.food.length);   // 0

// 7 task
class Person {
  constructor (name) {
    this.legs = 2;
    this.arms = 2;
    this.canWalk = true;
  }
}

class Programmer extends Person {
  constructor() {
    super();
    this.writeCode = true;
    this.knowJS = true;
    this.say = function () {
      console.log("I can write clean code on JS");
    };
  }
}

var js = new Programmer("afdsfdas");
var css = new Programmer("aljh");

// 8 task
function Adder(startingValue) {
  this.value = startingValue;
  this.showValue = function() {
    return this.value;
  }
  this.addInput = function() {
    return this.value = this.value + +prompt();
  }
};
var adder = new Adder(6)
console.log(adder.value);
adder.addInput();
adder.addInput();
console.log(adder.showValue());

// 9 task
function sum(a) {
  if (typeof a === 'number') {
      var result = a;
  }
  else {
    return sum;
  }
  function f(b) {
    if (typeof b === 'number') {
    result += b;
    return f;
    }
    else {
      return f;
    }
  }
  f.toString = function() {
    return result;
  };
  return f;
}
console.log( sum(2)(3)(4)(5) );

// 10 task
let el = document.getElementById("marquee"),
text = el.innerHTML;

setInterval (function (){
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  el.innerHTML = text;
}, 100);
