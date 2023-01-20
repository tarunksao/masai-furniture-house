const {Schema, model} = require('mongoose');

const userSchema = Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, default:'customer'}
},{
    versionKey:false
});

const UserModel = model('user', userSchema);

module.exports = {
    UserModel
};
