const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');



router.get('/', customerController.list);       //Cuando se entra al sitio principal de la pagina 
router.post('/add', customerController.save);   //Para guardar los datos del formulario de registro
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.saveEdit);

module.exports = router;