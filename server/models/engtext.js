var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var engtext = new Schema({
    LANDINGTITLE1: {type: String, default: "We take"},
    LANDINGMESSAGE: {type: String, default: "electrical solutions"},
    LANDINGTITLE2: {type: String, default: "to new heights"},
    LANDINGBUTTON1: {type: String, default: "INQUIRY"},
    LANDINGBUTTON2: {type: String, default: "ABOUT THE COMPANY"},
    SIDEMENUINTRO: {type: String, default: "Introduction"},
    INTROTEXT: {type: String, default: "We are a strong Estonian company, which has taken on the task of solving all electrical work related tasks. Our fine knowledge of electrical work has been honed by years of experience."},
    INTROSUBHEADING1: {type: String, default: "Electrical work"},
    INTROSUBHEADING2: {type: String, default: "Installation"},
    INTROSUBHEADING3: {type: String, default: "Electric shield manufacturing"},
    INTROSUBHEADING4: {type: String, default: "Planning"},
    INTROSUBTEXT1: {type: String, default: "This is our main field. We are providing electrical works on a daily basis."},
    INTROSUBTEXT2: {type: String, default: "The skilled workers are able to assist in installing different kinds of electrical appliances."},
    INTROSUBTEXT3: {type: String, default: "We have a long experience in building and fixing electrical shields."},
    INTROSUBTEXT4: {type: String, default: "We have been composing electrical projects for almost 25 years."},
    SIDEMENUCREW: {type: String, default: "Team"},
    CREWTEXT: {type: String, default: "The key players in the company provide efficient and professional advice, and the work we do talks for itself."},
    CREWPOS1: {type: String, default: "Manager"},
    CREWNAME1: {type: String, default: "Priit Laur"},
    CREWMAIL1: {type: String, default: "priit.laur@elektrosystem.ee"},
    CREWPOS2: {type: String, default: "Project Manager"},
    CREWNAME2: {type: String, default: "Marco Kruustük"},
    CREWMAIL2: {type: String, default: "marco.kruustuk@elektrosystem.ee"},
    CREWPOS3: {type: String, default: "Project Manager"},
    CREWNAME3: {type: String, default: "Sander Seene"},
    CREWMAIL3: {type: String, default: "sander.seene@elektrosystem.ee"},
    MAPEXTRA: {type: String, default: "Open in google maps"},
    MAIL: {type: String, default: "E-mail: info@elektrosystem.ee"},
    ADDRESS: {type: String, default: "Address: Tähe 127c, Tartu"},
    PHONE: {type: String, default: "Phone: +372 7366019"},
    CONTACTHEAD1: {type: String, default: "Want more information?"},
    CONTACTHEAD2: {type: String, default: "Contact us"},
    FORMNAME: {type: String, default: "Name"},
    FORMEMAIL: {type: String, default: "E-mail address"},
    FORMMESSAGE: {type: String, default: "Message"}

});
module.exports = mongoose.model('engtext', engtext);