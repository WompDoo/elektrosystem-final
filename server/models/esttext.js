var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var esttext = new Schema({
    LANDINGTITLE1: {type: String, default: "Meie tehtud"},
    LANDINGMESSAGE: {type: String, default: "elektrilahendused"},
    LANDINGTITLE2: {type: String, default: "on kõrgusi ületavad"},
    INTROTEXT: {type: String, default: "Oleme tugev Eesti ettevõte, kes võtnud oma missiooniks lahendada kõik elektritöödega seotud ülesanded"},
    INTROSUBHEADING1: {type: String, default: "Elektritööd"},
    INTROSUBHEADING2: {type: String, default: "Elektriklipide ehitus"},
    INTROSUBHEADING3: {type: String, default: "Seadmete paigaldus"},
    INTROSUBHEADING4: {type: String, default: "Projekteerimine"},
    INTROSUBTEXT1: {type: String, default: "See on meie peamine tööpõld"},
    INTROSUBTEXT2: {type: String, default: "Omame pikaajalist kogemust elektrikilpide ehitusel ja remontimisel"},
    INTROSUBTEXT3: {type: String, default: "Meil on oskuslik tööjõud erinevate elektriseadmete installeerimiseks"},
    INTROSUBTEXT4: {type: String, default: "Oleme koostanud elektriprojekte juba ligi 25 aastat"},
    CREWTEXT: {type: String, default: "Ettevõtte võtmetegijad annavad asjalikku ja profesionaalset nõu ning meie tehtud tööd räägivad enda eest"},
    CREWPOS1: {type: String, default: "Juhataja"},
    CREWNAME1: {type: String, default: "Priit Laur"},
    CREWMAIL1: {type: String, default: "priit.laur@elektrosystem.ee"},
    CREWPOS2: {type: String, default: "Projektijuhataja"},
    CREWNAME2: {type: String, default: "Marco Kruustük"},
    CREWMAIL2: {type: String, default: "marco.kruustuk@elektrosystem.ee"},
    CREWPOS3: {type: String, default: "Projektijuhataja"},
    CREWNAME3: {type: String, default: "Sander Seene"},
    CREWMAIL3: {type: String, default: "sander.seene@elektrosystem.ee"},
    MAIL: {type: String, default: "Tähe 127c, Tartu"},
    ADDRESS: {type: String, default: "info@elektrosystem.ee"},
    PHONE: {type: String, default: "+372 7366019"}

});
module.exports = mongoose.model('esttext', esttext);