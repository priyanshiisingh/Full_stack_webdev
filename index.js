//path module 

const path = require('path')
console.log(path.resolve('./app.js'))

console.log(path.relative('./temp', '././temp/app.js'))