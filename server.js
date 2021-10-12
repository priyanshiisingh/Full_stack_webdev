// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// console.log(http)

// const server = http.createServer((request, response) => {
//     // console.log(request.headers)
//     //console.log(request.url)
//     // console.log(request.method)
//     // const path = request.url
//     const markup = fs.readFileSync(path.resolve('./index.html'))
//     response.write(markup)
//     response.end()
// })

// console.log(server)

// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })

// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {
//     // request.url
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>LOGIN</h1>')
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SINGUP</h1>')
//         response.end()
//     }
// })


// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.url)
    res.send('this is a response')
})

app.get('/login', (req, res) => {
    console.log(req.url)
    res.send('this is a login')
})

app.listen(3000, () => {
    console.log(`server listening to port`)
})