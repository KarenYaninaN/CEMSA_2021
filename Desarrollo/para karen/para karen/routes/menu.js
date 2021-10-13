const router = require('express').Router();



router.get('/menu',  (req, res) => {
    res.render('menu');
});

module.exports = router;