const express = require('express')
const app = express()
const database = require('./database/db')
app.use(express.json())

app.get('/', (req, res) => {
    try {
        document.getElementById('id')
    } catch (error) {
        res.status(200).send(error.message)
    }
})

app.listen(3001, () => {
    console.log(`server listening to port`)
})