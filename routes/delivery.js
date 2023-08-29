const express = require('express')
const router = express.Router()

const DeliveryController = require('../controllers/delivery.controller')

console.log(DeliveryController)

router.get('/', DeliveryController.IndexController)
router.post('/', DeliveryController.IndexPostController)
router.delete('/:id', DeliveryController.IndexDeleteController	)
router.get('/:id', DeliveryController.IndexGetByIdController)
router.put('/:id', DeliveryController.IndexUpdateController)

module.exports = router
