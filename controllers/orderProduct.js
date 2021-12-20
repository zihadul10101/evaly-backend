const OrderProduct = require('../models/ProductOrder');

const addneworder = async (req, res, next) => {
    try {
        const newOrder = new OrderProduct({
            userId: req.body.userId,
            productName: req.body.productName,
            customerEmail: req.body.customerEmail,
            productImage: req.body.productImage,
            price: req.body.price,
            status: req.body.status
        })
        const order = await newOrder.save()
        res.status(200).json({ success: 'A new order was created successfully!', order })
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// get all order
const GetAllOrder = async (req, res, next) => {
    try {
        const findAllOrder = await OrderProduct.find();
        res.status(200).json(findAllOrder)
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//update any field from order

const Updateorder = async (req, res) => {
    if (req.body.orderId === req.params.id) {

        try {
            const updateorder = await OrderProduct.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json(updateorder)
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(401).json('Update your order list')
    }
}

// single user order list
const UserOrderList = async (req, res, next) => {
    let id = req.params.id;
   console.log(id);
        try {    
            const orders = await OrderProduct.find({ userId: id });
            console.log(orders);
            res.status(200).json(orders)
        }
        catch (err) {

            res.status(500).json({ message: err.message })
        }

}

//delete a single order

const DeleteOrder = async (req, res, next) => {

    try {
        const order = await OrderProduct.findById(req.params.id);

        try {
            await order.delete();
            res.status(200).json({ success: "order has been deleted..." });
        } catch (err) {
            res.status(500).json(err);
        }

    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports = {
    DeleteOrder,
    addneworder,
    Updateorder,
    GetAllOrder,
    UserOrderList

}

