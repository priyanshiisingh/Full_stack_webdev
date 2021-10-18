const express = require('express')
const app = express()
const database = require('./database/db')
app.use(express.json())

app.get('/products/:categories', (req, res) => {
    if (req.params.categories === 'case') {}
    if (req.params.categories === 'bands') {}
    if (req.params.categories === 'phones') {}

    console.log(req.params)
    res.send('ping')
})

app.listen(3001, () => {
    console.log(`server listening to port`)
})