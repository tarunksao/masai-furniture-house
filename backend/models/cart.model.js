const {Schema, model} = require('mongoose');

const cartSchema = Schema({
    product:{type:Schema.Types.ObjectId, ref:'product', required:true},
    user:{type:Schema.Types.ObjectId, ref:'user'},
    quantity:{type:Number, default:1, required:true, min:1}
}, {
    versionKey:false
});

const CartModel = model('cart', cartSchema);

module.exports = {
    CartModel
};
