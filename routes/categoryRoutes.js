const express = require('express')
const router = express.Router()
const database = require('../database/db')

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