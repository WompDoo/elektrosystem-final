var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rustext = new Schema({
    LANDINGTITLE1: {type: String, default: "Осуществленные нами проекты"},
    LANDINGMESSAGE: {type: String, default: "в сфере електричества"},
    LANDINGTITLE2: {type: String, default: "превышают высоты"},
    LANDINGBUTTON1: {type: String, default: "ПРИШЛИ ЗАПРОС"},
    LANDINGBUTTON2: {type: String, default: "О КОМПАНИИ"},
    SIDEMENUINTRO: {type: String, default: "Ознакомление"},
    INTROTEXT: {type: String, default: "Наш богаж умения и знаний  на фоне долголетнего опыта, развит и отшлифован до мелочей"},
    INTROSUBHEADING1: {type: String, default: "Электрические работы"},
    INTROSUBHEADING2: {type: String, default: "Собирание электпических щитов."},
    INTROSUBHEADING3: {type: String, default: "Установка приборов"},
    INTROSUBHEADING4: {type: String, default: "Проектирование"},
    INTROSUBTEXT1: {type: String, default: "Эта наша главная сфера деятельности, различные электрические работы-это наша повседневная работа"},
    INTROSUBTEXT2: {type: String, default: "Имеем долгосрочный опыт по собиранию и ремонту электрических щитов"},
    INTROSUBTEXT3: {type: String, default: "У нас опытный персонал по инсталяции различных электрических приборов"},
    INTROSUBTEXT4: {type: String, default: "Составляем электрические проекты на пртяжении 25 лет"},
    SIDEMENUCREW: {type: String, default: "Персонал"},
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
    MAPEXTRA: {type: String, default: "Открыть в google maps"},
    MAIL: {type: String, default: "info@elektrosystem.ee"},
    ADDRESS: {type: String, default: "Адрес: Tähe 127c, Tartu"},
    PHONE: {type: String, default: "Телефон: +372 7366019"},
    CONTACTHEAD1: {type: String, default: "Желаете получить дополнительную информацию"},
    CONTACTHEAD2: {type: String, default: "Связывайтесь с нами"},
    FORMNAME: {type: String, default: "Имя"},
    FORMEMAIL: {type: String, default: "Э-майл"},
    FORMMESSAGE: {type: String, default: "Сообщение"}

});
module.exports = mongoose.model('rustext', rustext);