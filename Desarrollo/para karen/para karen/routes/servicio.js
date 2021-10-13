  
const router = require('express').Router();

const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.list);

router.post('/add', servicioController.save);
router.get('/update/:id', servicioController.edit);
router.post('/update/:id', servicioController.update);
router.get('/delete/:id', servicioController.delete);


router.get('/servicio_editar',  (req, res) => {
    res.render('servicio_edit');
});

module.exports = router;