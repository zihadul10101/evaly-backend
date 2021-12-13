const Order = require('../models/Order');

const addneworder = async (req, res, next) => {
    try {
        const newOrder = new Order({
            productName: req.body.productName,
            customerEmail: req.body.customerEmail,
            productImage: req.body.productImage,
            price: req.body.price
        })
        const order = await newOrder.save()
        res.status(200).json({ success: 'A new order was created successfully!', order })
    }
    catch (err) {
        res.status(400).json({ err });
    }
}

// get all order
const GetAllOrder = async (req, res, next) => {
    try {
        const findAllOrder = await Order.find();
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
            const updateorder = await Order.findByIdAndUpdate(req.params.id, {
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


//delete a single order

const DeleteOrder = async (req, res, next) => {

    try {
        const order = await Orders.findById(req.params.id);
        if (Orders.usermail === req.body.email) {
            try {
                await order.delete();
                res.status(200).json({ success: "order has been deleted..." });
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json({ error: "You can delete only your order!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports = {
    DeleteOrder,
    addneworder,
    Updateorder,
    GetAllOrder

}

