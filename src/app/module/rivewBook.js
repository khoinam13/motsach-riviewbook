// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Course = new Schema({
//     name: {type:String},
//     decoration: {type:String},
//     image: {type:String},
//     createdAt: {type:Date,default: Date.now},
//     updatedAt: {type:Date,default: Date.now}
// });
// module.exports = mongoose.model('Course',Course);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const RiviewBook = new Schema({
    name:{type:String, required:true},
    image:{type:String},
    author:{type:String},
    category:{type:String},
    slug:{type:String, slug:'name'},
    // createdAt:{type:Date, default: Date.now},
    // updatedAt:{type:Date, default: Date.now}
},{
    timestamps: true,
})
module.exports = mongoose.model('Book',RiviewBook)