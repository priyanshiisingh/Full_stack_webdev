const fs = require('fs')

// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     if (error) console.log(error)
//     else console.log(data)
// })

console.log(fs.readFileSync('./text.txt', 'utf8'))

// fs.readFile('./text.txt', (error, data) => {
//     if (error) console.log(error)
//     else console.log(data.toString)
// })

console.log('abc')