  
const router = require('express').Router();

const centralController = require('../controllers/centralController');




router.get('/', centralController.list);
router.post('/add', centralController.save);
router.get('/update/:id', centralController.edit);
router.post('/update/:id', centralController.update);
router.get('/delete/:id', centralController.delete);



module.exports = router;