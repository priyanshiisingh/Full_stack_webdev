const fs = require('fs')

fs.readFile('./text.txt', (data, error) => {
    if (error) console.log(error)
    else console.log(data)
})