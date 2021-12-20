const router = require('express').Router();
const product_controller = require('../controllers/product')

router.post('/addnewproduct', product_controller.addnewproduct)
router.get('/productAll', product_controller. GetAllProduct)
router.get('/:id',product_controller.signleproduct)
router.put('/updated/:id', product_controller.UpdatedProduct);
router.delete('/:id', product_controller.DeleteProduct)

module.exports = router;