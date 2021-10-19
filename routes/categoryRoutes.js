const express = require('express')
const router = express.Router()
const database = require('../database/db')
const { v4: uuidv4 } = require('uuid');

/*
ROUTE: http://localhost:3001/category/all
METHOD : GET
*/

router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: "successfully fetched",
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "Failed"
        })
    }
})

/*
ROUTE: http://localhost:3001/category/add 
METHOD : POST
*/

router.post('/add', (req, res) => {
    try {
        const { name } = req.body
        let newcategory = {
            name,
            id: uuidv4()
        }

        let includes = database.categories.find(item => item.name === name)
        if (!includes) database.categories.push(newcategory)
        else console.log('Already exists')

        res.status(200).json({
            category: database.categories,
            message: "succefully fetched",
            status: "Succes"
        })
    } catch (error) {
        res.status(200).json({
            category: [],
            message: error.message,
            status: "Failed"

        })
    }
})

/*
ROUTE: http://localhost:3001/category/delete 
METHOD : DELETE
*/

router.delete('/delete/:id', (req, res) => {
    try {
        const { id } = req.params
            // let element = database.categories.find(item => { item.id === id })
            // const index = database.categories.indexOf(element)
            // database.categories.splice(index, 1)
        const newcategories = database.categories.filter(item => { item.id !== id })
        database.categories = newcategories
        console.log(newcategories)

        res.status(200).json({
            category: database.categories,
            message: "succefully fetched",
            status: "Succes"
        })
    } catch (error) {
        res.status(200).json({
            category: [],
            message: error.message,
            status: "Failed"

        })
    }
})


module.exports = router