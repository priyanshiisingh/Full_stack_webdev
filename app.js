function greet1(name = "john", age = "99") {
    console.log(name)
    console.log(age)

    console.log("hello");
}

greet1()

function greet2(a, b) {
    console.log(a + b)

    console.log("hello");
}

greet2(10, 12)

function sum(a, b) {
    var sum = a + b
    return sum
}

var result = sum(10, 20)
console.log(result)

console.log(sum(10, 20))

//function expression

var add = function(a, b) {
    var sum = a + b
    return sum;
}

console.log(add(10, 20))

var greet3 = function(name = 'John', age = 99) {

    var profile = name + age
    return profile

}

console.log(greet3('rii', 20))

var greet34 = (name = 'John', age = 99) => {
    console.log(greet34('rii', 20))
    var profile = name + age
    return profile

}

var add = (a, b) => a + b
console.log(add(10, 20))


const meet = (name) => 'hi' + name
console.log(meet("prii"))