var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var demoPic = new Schema({

    originalPath: String,
    path: String

});
module.exports = mongoose.model('demopic', demoPic);

