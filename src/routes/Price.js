const { Router } = require('express');
const {getPriceForUserAndProduct} = require('../controller/price.controller.js');

const router = Router();

router.get('/:user_id/:nombre_producto', getPriceForUserAndProduct);

module.exports = router;
