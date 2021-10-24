const express = require('express')
const router = express.Router()
const database = require('../database/db')
const { v4: uuidv4 } = require('uuid');

/*
ROUTE: http://localhost:3001/product/all
METHOD : GET
*/

router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            products: database.products,
            message: "successfully fetched",
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "Failed"
        })
    }
})

/*
ROUTE: http://localhost:3001/products/add 
METHOD : POST
*/

router.post('/add', (req, res) => {

    const { name, price, categoryName } = req.body

    if (!database.categories.find(item => item.id === categoryName)) {
        // if category doesn't exsits create new 
        let newcategory = { name: categoryName, id: uuidv4 }
        database.categories.push(newcategory)
        const newproduct = { id: uuidv4, name, price, category: categoryName }
        database.products.push(newproduct)
    } else {
        //if category exsits just push item into the category
        const newproduct = { id: uuidv4, name, price, category: categoryName }
        database.products.push(newproduct)
    }

    try {
        res.status(200).json({
            products: database.products,
            message: "successfully fetched",
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "Failed"
        })
    }
})

module.exports = router