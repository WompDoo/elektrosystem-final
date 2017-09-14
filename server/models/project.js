var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
    name: String,
    category: String,
    years: String,
    picture: String,
    description: String

});
module.exports = mongoose.model('project', project);
