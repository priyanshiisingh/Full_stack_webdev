const express = require('express')
const app = express()

app.use(express.json())

// const isadmin = (req, res, next) => {
//     if (req.headers.admin === 'true') next()
//     else res.send('unautorized')
// }

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send("dadada")
})

// app.get('/private', isadmin, (req, res) => {
//     res.send("I'm a admin route")
// })

app.listen(3000, () => {
    console.log(`server listening to port`)
})

// const express = require('express')
// const PORT = 3000
// const app = express()

// const isAdmin = (req, res, next) => {
//     if (req.headers.admin === 'true') next()
//     else res.send("UNAUTHORISED")
// }


// app.get('/public', (req, res) => {
//     console.log(req.headers)
//     res.send(`I'm a public route`)
// })

// app.get('/private', isAdmin, (req, res) => {
//     res.send(`I'm a admin route`)
// })



// app.listen(PORT, () => {
//     console.log(`Server running at port ${PORT}`)
// })


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


// console.log(express)

// const verify = (req, res, next) => {
//     if (req.headers['user-agent'] === 'PostmanRuntime/7.28.4') next()
//     else res.send('BLOCKED')
// }