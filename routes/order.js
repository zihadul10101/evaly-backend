const router = require('express').Router();
const order_controller = require('../controllers/order');

router.post('/addneworder', order_controller.addneworder);
router.get('/orderAll', order_controller.GetAllOrder);
router.patch('/updated/:id', order_controller.Updateorder);
router.delete('/:id', order_controller.DeleteOrder);

module.exports = router;