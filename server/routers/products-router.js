const express = require('express')

const productsControllers = require('../controllers/products.controller')

const router = express.Router()

router.get('/', productsControllers.getProducts)

router.post('/', productsControllers.putProduct)

module.exports = router