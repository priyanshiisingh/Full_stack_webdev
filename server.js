const express = require('express')
const app = express()
const database = require('./database/db')
const categoryroutes = require('./routes/categoryRoutes')
const productroutes = require('./routes/productRoutes')

app.use(express.json())

app.use('/category', categoryroutes)
app.use('/products', productroutes)


app.listen(3001, () => {
    console.log(`server listening to port`)
})