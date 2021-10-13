   
const router = require('express').Router();

const servicioClienteController = require('../controllers/servicioClienteController');

router.get('/', servicioClienteController.list);

router.post('/add', servicioClienteController.save);
router.get('/update/:id', servicioClienteController.edit);
router.get('/consultar/:id', servicioClienteController.consultarSC);


router.get('/agregar/:id', servicioClienteController.saveSCliente);
router.post('/update/:id', servicioClienteController.update);
router.get('/delete/:id', servicioClienteController.delete);


module.exports = router;