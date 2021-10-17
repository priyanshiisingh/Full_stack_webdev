const express = require('express')
const app = express()
const database = require('./database/db')
app.use(express.json())



app.listen(3001, () => {
    console.log(`server listening to port`)
})