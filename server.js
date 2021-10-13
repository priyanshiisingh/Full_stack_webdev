const express = require('express')
const app = express()

// console.log(express)

const verify = (req, res, next) => {
    if (req.headers['user-agent'] === 'PostmanRuntime/7.28.4') next()
    else res.send('BLOCKED')
}

app.get('/', verify, (req, res) => {
    res.send('verified')
})

app.listen(3000, () => {
    console.log(`server listening to port`)
})


// module.exports = () => {}

// app.post('/', (req, res) => {
//     console.log(req.url)
//     res.send('POST')
// })

// app.put('/', (req, res) => {
//     console.log(req.url)
//     res.send('PUT')
// })
// app.patch('/', (req, res) => {
//     console.log(req.url)
//     res.send('PATCH')
// })
// app.delete('/', (req, res) => {
//     console.log(req.url)
//     res.send('Delete')
// })