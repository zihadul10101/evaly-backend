const Product = require('../models/Product');

const addnewproduct = async (req, res) => {
    try {
        const newProduct = new Product({
            title: req.body.title,
            photo: req.body.photo,
            description: req.body.description,
            price: req.body.price,
        })
        const product = await newProduct.save()
        res.status(200).json({ success: 'A new product was created successfully!',product})
    }
    catch (err) {
        res.status(500).json({ message: 'only admin can create new product'});
    }
}

//get all product

const GetAllProduct = async (req, res) => {
    try {
        const findProduct = await Product.find();
        res.status(200).json(findProduct)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


//update any field from order

const UpdatedProduct = async (req, res) => {
    if (req.body.productId === req.params.id) {

try{
const updatedproduct = await Order.findByIdAndUpdate(req.params.id,{
    $set:req.body
})
res.status(200).json(updatedproduct)
}
catch(err) {
      res.status(500).json(err) 
}
    }
    else{
        res.status(401).json('Update your product')
    }
}




//find a single product item by productId

const signleproduct = async (req, res, next) => {
    let singleProductId = req.params.id;
    try {
        const productItem = await merchants.findById(singleProductId);
        res.status(200).json(productItem)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


//delete a single product

const DeleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
      
            try {
                await product.delete();
                res.status(200).json({ success:"product has been deleted"});
            } catch (err) {
                res.status(500).json({ error: 'you are not an admin',err});
            }
        
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    addnewproduct,
    GetAllProduct,
    DeleteProduct,
    signleproduct,
    UpdatedProduct
}