const router = require('express').Router();



router.get('/inicio',  (req, res) => {
    res.render('inicio');
});

module.exports = router;