const fs = require('fs')

fs.readFile('./text.txt', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})