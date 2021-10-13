  
const router = require('express').Router();

const domicilioCuentaController = require('../controllers/domicilioCuentaController');

router.get('/domicilioCuenta',  (req, res) => {
    res.render('domicilioCuentas');
});


//router.get('/', domicilioCuentaController.list);
router.post('/addDomicilioCuenta', domicilioCuentaController.save);
router.get('/update/:id', domicilioCuentaController.edit);
router.post('/update/:id', domicilioCuentaController.update);
router.get('/delete/:id', domicilioCuentaController.delete);

module.exports = router;