const express = require('express')
const router = express.Router()
const database = require('../database/db')
const { v4: uuidv4 } = require('uuid');


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

router.post('/add', (req, res) => {
    try {
        const { name } = req.body
        let newcategory = {
            name,
            id: uuidv4()
        }

        database.categories.push(newcategory)

        res.status(200).json({
            category: [],
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