var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    name: String,
    price: String,
    information: String,
    picture: String,
    quantity: String,
    serial: String
});
module.exports = mongoose.model('products', Product);
