var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rustext = new Schema({
    LANDINGTITLE1: {type: String, default: "Осуществленные нами проекты"},
    LANDINGMESSAGE: {type: String, default: "в сфере електричества"},
    LANDINGTITLE2: {type: String, default: "превышают высоты"},
    INTROTEXT: {type: String, default: "Наш богаж умения и знаний  на фоне долголетнего опыта, развит и отшлифован до мелочей"},
    INTROSUBHEADING1: {type: String, default: "Электрические работы"},
    INTROSUBHEADING2: {type: String, default: "Собирание электпических щитов."},
    INTROSUBHEADING3: {type: String, default: "Установка приборов"},
    INTROSUBHEADING4: {type: String, default: "Проектирование"},
    INTROSUBTEXT1: {type: String, default: "Эта наша главная сфера деятельности, различные электрические работы-это наша повседневная работа"},
    INTROSUBTEXT2: {type: String, default: "Имеем долгосрочный опыт по собиранию и ремонту электрических щитов"},
    INTROSUBTEXT3: {type: String, default: "У нас опытный персонал по инсталяции различных электрических приборов"},
    INTROSUBTEXT4: {type: String, default: "Составляем электрические проекты на пртяжении 25 лет"},
    CREWTEXT: {type: String, default: "Ключевые деятели компании дают проффесиональные и дельные советы"},
    CREWPOS1: {type: String, default: "Руководитель"},
    CREWNAME1: {type: String, default: "Priit Laur"},
    CREWMAIL1: {type: String, default: "priit.laur@elektrosystem.ee"},
    CREWPOS2: {type: String, default: "Руководитель проектов"},
    CREWNAME2: {type: String, default: "Marco Kruustük"},
    CREWMAIL2: {type: String, default: "marco.kruustuk@elektrosystem.ee"},
    CREWPOS3: {type: String, default: "Руководитель проектов"},
    CREWNAME3: {type: String, default: "Sander Seene"},
    CREWMAIL3: {type: String, default: "sander.seene@elektrosystem.ee"},
    MAIL: {type: String, default: "Tähe 127c, Tartu"},
    ADDRESS: {type: String, default: "info@elektrosystem.ee"},
    PHONE: {type: String, default: "+372 7366019"}

});
module.exports = mongoose.model('rustext', rustext);