const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const RegisterBook = new Schema({
    registerName:{type:String, require:true},
    registerEmail:{type:String,},
    registerPassword:{type:String,},
    registerPasswordBack:{type:String,},
    slug:{type:String, slug:'registerName'}
},{
    timestamps: true,
})
module.exports = mongoose.model('RegisterBook',RegisterBook)