   
const router = require('express').Router();

const consultarServicioClienteController = require('../controllers/consultarServicioClienteController');

router.get('/', consultarServicioClienteController.list);

router.post('/add', consultarServicioClienteController.save);
router.get('/update/:id', consultarServicioClienteController.edit);
router.get('/agregar/:id', consultarServicioClienteController.saveSCliente);
router.post('/update/:id', consultarServicioClienteController.update);
router.get('/delete/:id', consultarServicioClienteController.delete);


module.exports = router;