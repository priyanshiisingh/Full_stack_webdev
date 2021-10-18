const express = require('express')
const app = express()
const database = require('./database/db')
const categoryroutes = require('./routes/categoryRoutes')
app.use(express.json())

console.log(categoryroutes.stack)

// http://3001/categories/route
// http://3001/mercedes/route
// http://3001/mercdes/1/1/2/route
app.use('/categories', categoryroutes)




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