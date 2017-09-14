var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var path = require('path');


var api_key = "insert key here";
var domain = "elektrosystem.ee";
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/uploads'),
    filename: function (req, file, cb) {
        var extArray = file.mimetype.split('/');
        var extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + Date.now() + '.' + extension)
    }
})
var upload = multer({storage: storage});

var estText = require('../models/esttext.js');
var engText = require('../models/engtext.js');
var rusText = require('../models/rustext.js');
var project = require('../models/project.js');


router.post('/email', function(req, res){
    console.log(req.body.email.$viewValue);
    if(req.body.lang === "et"){
            var feedbackToCustomer = {
                from: "Elektrosystem<info@elektrosystem.ee>",
                to:  req.body.email.$viewValue,
                subject: "Teie küsimus jõudis meieni!",
                html: '<!DOCTYPE html> \
                        <html>\
                         <head>\
                          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                          <title>Elektrosystem</title>\
                          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                        </head>\
                        <body style="margin: 0; padding: 0;">\
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                               <tr><td style="color:#500050; font-size:24px;">Aitäh, '+req.body.name.$viewValue+'</td></tr>\
                               <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">Teie küsimus on jõudnud meieni!</td></tr>\
                               <tr><td><b>Emaili aadress: </b> '+req.body.email.$viewValue +'</td></tr>\
                               <tr><td><b>Sõnumi sisu: </b> '+req.body.text.$viewValue +'</td></tr>\
                               <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">Vastame Teile esimesel võimalusel.</td></tr>\
                               <tr><td style="color:#500050; font-size:24px;">Ilusat päeva soovides</td></tr>\
                               <tr><td style="color:#500050; font-size:24px;">Elektrosystem</td></tr>\
                          </table>\
                        </body>\
                        </html>'
            }
        }
    else{
        var feedbackToCustomer = {
            from: "Elektrosystem<info@elektrosystem.ee>",
            to: req.body.email.$viewValue,
            subject: "Your question has reached us!",
            html: '<!DOCTYPE html> \
                    <html>\
                     <head>\
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                      <title>Elektrosystem</title>\
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                    </head>\
                    <body style="margin: 0; padding: 0;">\
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                           <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name.$viewValue +'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">We have received your question!</td></tr>\
                           <tr><td><b>Email address: </b> '+req.body.email.$viewValue +'</td></tr>\
                           <tr><td><b>Message: </b> '+req.body.text.$viewValue +'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">We will answer you as soon as possible.</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Have a very nice day,</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Elektrosystem</td></tr>\
                      </table>\
                    </body>\
                    </html>'
        }
    }
    var feedbackToOwner = {
        from: "Elektrosystem<info@elektrosystem.ee>",
        to: "oskarmartinco@gmail.com",
        subject: "Tagasiside liides lehelt",
        html: '<!DOCTYPE html> \
                <html>\
                 <head>\
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                  <title>Elektrosystem</title>\
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                </head>\
                <body style="margin: 0; padding: 0;">\
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                       <tr><td style="color:#500050; font-size:24px;">Lisandunud on tagasiside lehelt</td></tr>\
                       <tr><td><b>Nimi: </b> '+req.body.name.$viewValue +'</td></tr>\
                       <tr><td><b>Meili aadress: </b> '+req.body.email.$viewValue +'</td></tr>\
                       <tr><td><b>Sõnum: </b> '+req.body.text.$viewValue +'</td></tr>\
                  </table>\
                </body>\
                </html>'
    }
    mailgun.messages().send(feedbackToOwner, function(err, body){
        console.log(body);
    })
    mailgun.messages().send(feedbackToCustomer, function(err, body){
        console.log(body);
        if(err) {
            res.json({
                msg: "there was error sending mail"
            });
        }else{
            res.json({
                msg: "mail was sent"
            })
        }
    });
})

router.post('/test/project', function (req, res) {
    project.create({
        name: req.body.name,
        category: req.body.category,
        years: req.body.years,
        picture: req.body.picture,
        description: req.body.description
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})

router.get('/test/getallProjects', function (req, res) {
    project.find(function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})



var TestMudel = require('../models/test.js');


router.post('/test/randomField', function(req, res){

    var key = req.body.fieldToBeUpdated;
    var dynSet = {$set: {}};
    dynSet.$set[key] = req.body.fieldToBeUpdatedValue;
    var language = req.body.lang;

    if(language === "et"){
        estText.find(function(err, esttext){
            if(err) res.send(err);
            esttext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }
    if(language === "en"){
        engText.find(function(err, engtext){
            engtext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }
    if(language === "ru"){
        rusText.find(function(err, rustext){
            if(err) res.send(err);
            rustext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }

})






router.get('/test/getalltests', function (req, res) {
    TestMudel.find(function (err, testmudelid) {
        if (err) res.send(err);
        res.json(testmudelid);
    })
})

router.get('/test/getfirstEst', function (req, res) {
    estText.findOne(function (err, esttext) {

        if (err) res.send(err);
        res.json(esttext);
    })
})
router.get('/test/getfirstEng', function (req, res) {
    engText.findOne(function (err, engtext) {

        if (err) res.send(err);
        res.json(engtext);
    })
})
router.get('/test/getfirstRus', function (req, res) {
    rusText.findOne(function (err, rustext) {

        if (err) res.send(err);
        res.json(rustext);
    })
})


module.exports = router;
