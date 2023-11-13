const { Router } = require('express');
const router = new Router();
const shop = require('./shop');
const worker = require('./worker');

router.use('/shop', shop);
router.use('/worker', worker);

module.exports = router;
