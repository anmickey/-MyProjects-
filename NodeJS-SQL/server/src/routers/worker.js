const { Router } = require('express');
const router = new Router();
const Worker = require('../controllers/WorkerController');
const workerBodyMw = require('../middleware/workerBodyMw');

router.post('/', Worker.get);
router.post('/add', workerBodyMw, Worker.add);

module.exports = router;
