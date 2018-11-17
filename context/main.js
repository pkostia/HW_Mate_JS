// 1 task
function getName(){
  return this.name;
}
obj = {
  name: 'Petka'
}
console.log(getName.call(obj));
console.log(getName());

// 2 task
function getDoubled(){
  return this.number*2;
}
object = {
  number: 5
}
function getDoubledTrippled(){
  return getDoubled.call(object)*3;
}
console.log(getDoubledTrippled());

// 3 task
function City(name, population, country){
  this.name = name;
  this.population = population;
  this.country = country;
  getPopulation = function(){
    return this.population;
  }
  getCityName = function(){
    return this.name;
  }
  Object.defineProperty(this, 'AREA', {value: 5, configurable: false});
  addCitizen = function(){
    return this.population+1;
  }
}
var c = new City('kostya', 15, 'fasdsdfa');
console.log(addCitizen.call(c));

// 4 task
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

console.log(sum(56)(-10)(3)(1));


/*CONSTRUCTORS-INHERITANCE*/
// 1 task
function User(fullName) {
  this.fullName = fullName;
  Object.defineProperties(this, {

      firstName: {

        get: function() {
          return this.fullName.split(' ')[0];
        },

        set: function(newFirstName) {
          this.fullName = newFirstName + ' ' + this.lastName;
        }

      },

      lastName: {

        get: function() {
          return this.fullName.split(' ')[1];
        },

        set: function(newLastName) {
          this.fullName = this.firstName + ' ' + newLastName;
        }

      }

    });
  // тут вы должны записать логику как вы будете в эти свойства записывать данные 
  // в свойства firstName/lastName через Object.defineProperty()
}

var vasya = new User('Александр Пушкин');

// 2 task
function Calculator() {

  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {

    var split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
  console.log(methods);
}
var calc = new Calculator;
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
console.log(calc.calculate('3 ** 7'));