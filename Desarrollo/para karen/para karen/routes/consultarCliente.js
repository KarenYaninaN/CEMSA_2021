  
const router = require('express').Router();

const consultarClienteController = require('../controllers/consultarClienteController');




router.get('/', consultarClienteController.list);




router.post('/add', consultarClienteController.save);
router.get('/update/:id', consultarClienteController.edit);
router.post('/update/:id', consultarClienteController.update);
router.get('/delete/:id', consultarClienteController.delete);
router.get('/consultarContrato/:id', consultarClienteController.consultarContrato);




module.exports = router;