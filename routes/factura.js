const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController')

router.get('/get', facturaController.getPago);
router.post('/insertar', facturaController.instertFactura);
router.post('/getFactura', facturaController.getOneFactura);
router.get('/getFacturaDetails/:id', facturaController.getFacturaDetails);

module.exports = router; 
