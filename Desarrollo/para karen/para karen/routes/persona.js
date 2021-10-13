  
const router = require('express').Router();

const personaController = require('../controllers/personaController');


/*router.get('/persona',  (req, res) => {
    res.render('personas');
});*/

router.get('/', personaController.list);
router.post('/add', personaController.save);
router.get('/update/:id', personaController.edit);
router.post('/update/:id', personaController.update);
router.get('/delete/:id', personaController.delete);

module.exports = router;