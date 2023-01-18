const {Schema, model} = require('mongoose');

const productSchema = Schema({
    image_src:{type:String, required:true},
    brand_name:{type:String, required:true},
    prod_desc:{type:String, required:true},
    price:{type:Number, required:true, min:1},
    category:{type:String, required:true},
    sub_category:{type:String, required:true},
    quantity:{type:Number, min:1, required:true, default:1}
}, {
    versionKey:false
});

const ProductModel = model('product', productSchema);

module.exports = {
    ProductModel
};
