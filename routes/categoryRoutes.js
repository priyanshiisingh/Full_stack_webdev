const express = require('express')
const router = express.Router()
const database = require('../database/db')

router.get('/all', (req, res) => {
    try {
        res.json({
            categories: database.categories,
            message: "successfully fetched",
            status: "Success"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "Failed"
        })
    }
})