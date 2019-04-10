const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
    created_at: {type:String, required:true},
    title: {type:String, required:true},
    url: {type:String, required:true},
    author: {type:String, required:true},
    points: {type:String, required:true},
    comment_text:{type:String, required:true},
})
module.exports = mongoose.model('Product', ProductSchema)
