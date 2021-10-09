// const greet = (() => {
//     console.log('hi')
// })

// module.exports.greet = greet
// console.log('i am index.js')

const add = () => {
    console.log('i add stuff')
}

const subtract = () => {
    console.log('i sbtract stuff')
}

const product = () => {
    console.log('i multiply stuff')
}

const divide = () => {
    console.log('i divide stuff')
}

module.exports.add = add
module.exports.subtract = subtract
module.exports.product = product
module.exports.divide = divide

// console.log(module.exports)