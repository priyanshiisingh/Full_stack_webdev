//operators 


//arithmetic operators

var a = 10;
var b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(b ** a); //power

//assignment operators

b = 11;
console.log(b);

b += 2;
console.log(b);

b++;
console.log(b);

b -= 1;
console.log(b);

var c = 10; //increment operators
console.warn(c++);

//comparison operators
var d = 10;
var e = 2;
var f = '10';

console.log(d > e)
console.log(d < e)
console.log(d == e)
console.log(d >= e)
console.log(d <= e)

console.log(d == f)

console.log(d === f)
console.log(d + f)

//logical operators

console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false