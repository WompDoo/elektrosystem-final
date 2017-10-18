var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
    name_ee: String,
    name_en: String,
    name_ru: String,
    subtitle_ee: String,
    subtitle_en: String,
    subtitle_ru: String,
    years_ee: String,
    years_en: String,
    years_ru: String,
    description_ee: String,
    description_en: String,
    description_ru: String,
    shortinfo_ee: String,
    shortinfo_en: String,
    shortinfo_ru: String,
    image: String,
    pictures: [String]

});
module.exports = mongoose.model('project', project);
