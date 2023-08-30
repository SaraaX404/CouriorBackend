const express = require('express')
const router = express.Router()

const DeliveryController = require('../controllers/delivery.controller')

console.log(DeliveryController)

router.get('/', DeliveryController.IndexController)
router.post('/', DeliveryController.IndexPostController)
router.delete('/:id', DeliveryController.IndexDeleteController	)
router.get('/charn', DeliveryController.CharnController)
router.get('/:id', DeliveryController.IndexGetByIdController)
router.put('/:id', DeliveryController.IndexUpdateController)
router.get('/charn', DeliveryController.CharnController)
module.exports = router
