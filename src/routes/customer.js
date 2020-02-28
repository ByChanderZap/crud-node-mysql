const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');



router.get('/', customerController.list);       //Cuando se entra al sitio principal de la pagina 


module.exports = router;