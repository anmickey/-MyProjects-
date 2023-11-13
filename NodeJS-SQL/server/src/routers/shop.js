const { Router } = require('express');
const router = new Router();
const Shop = require('../controllers/ShopController');
const shopBodyMw = require('../middleware/shopBodyMw');

router.post('/', Shop.get);
router.post('/add', shopBodyMw, Shop.add);
router.patch('/', shopBodyMw, Shop.change);
router.delete('/:id', Shop.delete);

module.exports = router;
