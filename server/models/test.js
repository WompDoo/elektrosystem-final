var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testmudel = new Schema({
    eng: {type: String, default: "default eng"},
    est: {type: String, default: "default est"},
    rus: {type: String, default: "default rus"}

});
module.exports = mongoose.model('testmudel', testmudel);
