const express = require('express')
const app = express()

app.use(express.json())

let products = [{ name: 'iPhone12 Case', price: '999' }, { name: 'iPhone13 Case', price: '1199' }, { name: 'iPhone13 Pro Case', price: '1499' }]

//-------------------validation middleware--------------

const validator = (req, res, next) => {
    const { name, price } = req.body
    if (!name || !price) res.json({ error: 'validation failed' })
    else next()
}


//-------------------public routes--------------
//GET route 
//send arr of products 
app.get('/products', (req, res) => {
    res.json({ products })
})

//-------------------private routes--------------
app.post('/products/add', validator, (req, res) => {
    const { name, price } = req.body

    products.push({
        name,
        price
    })

    res.send({ products })

    // const newpro = {
    //     name,
    //     price
    // }

    // products.push(newpro)

})

app.listen(3000, () => {
    console.log(`server listening to port`)
})