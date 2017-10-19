var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var path = require('path');
var Picture = require('../models/picture');
var User = require('../models/user');


var api_key = "key-99008ae76504df2a720c17c9735ad0fa";
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
    console.log(req.body.email);
    if(req.body.lang === "et"){
            var feedbackToCustomer = {
                from: "Elektrosystem<info@elektrosystem.ee>",
                to:  req.body.email,
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
                               <tr><td style="color:#500050; font-size:24px;">Aitäh, '+req.body.name+'</td></tr>\
                               <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">Teie küsimus on jõudnud meieni!</td></tr>\
                               <tr><td><b>Emaili aadress: </b> '+req.body.email +'</td></tr>\
                               <tr><td><b>Sõnumi sisu: </b> '+req.body.text +'</td></tr>\
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
            to: req.body.email,
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
                           <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name +'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">We have received your question!</td></tr>\
                           <tr><td><b>Email address: </b> '+req.body.email +'</td></tr>\
                           <tr><td><b>Message: </b> '+req.body.text +'</td></tr>\
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
        to: "oskarmartinco@gmail.com, wpihor@gmail.com, mail@jkniest.de",
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
                       <tr><td><b>Nimi: </b> '+req.body.name +'</td></tr>\
                       <tr><td><b>Meili aadress: </b> '+req.body.email +'</td></tr>\
                       <tr><td><b>Sõnum: </b> '+req.body.text +'</td></tr>\
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

// TODO: TMP

router.post('/user/register', function(req, res) {
    User.register(new User({ username: req.body.username }),
        req.body.password, function(err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        });
});

router.post('/test/rustext', function (req, res) {
    rusText.create({
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})

router.post('/test/engtext', function (req, res) {
    engText.create({
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})

router.post('/test/esttext', function (req, res) {
    estText.create({
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})

router.post('/test/project1', function (req, res) {
    project.create({
        name_ee: 'Selverid',
        name_en: 'Selvers',
        name_ru: 'Сельверы',
        subtitle_ee: 'Toidupoed',
        subtitle_en: 'Grocery stores',
        subtitle_ru: 'продуктовые магазины',
        years_ee: '2013-2015',
        years_en: '2013-2015',
        years_ru: '2013-2015',
        description_ee: 'Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus. Projekteeritud ja elekter on paigaldatud Aardla, Jaama, Jõgeva ja Vitamiini Selveritesse. Projektide toimumisaeg on jäänud vahemikku 2013-2016 aasta.',
        description_en: 'We have been an important part of the development of Estonia\'s most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.',
        description_ru: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016',
        shortinfo_ee: 'Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus.',
        shortinfo_en: 'We have been an important part of the development of Estonia\'s most prestigious grocery store chain.',
        shortinfo_ru: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
        image: 'img/projectPics/Selver/Selver1.jpg',
        pictures: ["img/projectPics/Selver/Selver1.jpg", "img/projectPics/Selver/Selver2.jpg", "img/projectPics/Selver/Selver3.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project2', function (req, res) {
    project.create({
        name_ee: 'EMÜ spordihoone',
        name_en: 'EMÜ sports club',
        name_ru: 'EMÜ спортивное здание',
        subtitle_ee: 'Spordikompleks Tartus',
        subtitle_en: 'Sports facility in Tartu',
        subtitle_ru: 'Спортивный комплекс в городе Тарту',
        years_ee: '2009',
        years_en: '2009',
        years_ru: '2009',
        description_ee: 'Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks. Koguprojekti pikkus 2 aastat ja kasulikku pinda 1500m2; töö tellijaks oli Eesti Maaülikool; kompleks asub Kreutzwaldi tänav 3, Tartu linna ääres, otse Tallinnast sissesõidul.',
        description_en: 'In partnership with YIT construction company we executed the electical works for Southern Estonia\'s biggest sports facility. The project was done in 2 years, and it has an area of 1500 m2; The client was Estonian University of Life Sciences.',
        description_ru: 'В сотрудничестве с YIT ehitusega фирмой установили световые и электрические решения в мощнейший спортивный комплекс южной Эстонии. Проект длился  2 года, общая площадь 1500 кв м, заказщик Eesti Maaülikool;  Kreutzwaldi улица 3, город Tartu',
        shortinfo_ee: 'Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks.',
        shortinfo_en: 'In partnership with YIT construction company we executed the electical works for Southern Estonia\'s biggest sports facility.',
        shortinfo_ru: 'В сотрудничестве с YIT ehitusega фирмой установили световые и электрические решения в мощнейший спортивный комплекс южной Эстонии.',
        image: 'img/projectPics/EMU/emu2.jpg',
        pictures: ["img/projectPics/EMU/emu1.jpg", "img/projectPics/EMU/emu2.jpg", "img/projectPics/EMU/emu3.jpg", "img/projectPics/EMU/emu4.jpg", "img/projectPics/EMU/emu5.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project3', function (req, res) {
    project.create({
        name_ee: 'Teater Vanemuine',
        name_en: 'Theater Vanemuine',
        name_ru: 'Театр Vanemuine',
        subtitle_ee: 'lavatehnika elektripaigaldis',
        subtitle_en: '',
        subtitle_ru: 'установка электричества и техники  на сцене',
        years_ee: '2016-2017',
        years_en: '2016-2017',
        years_ru: '2016-2017',
        description_ee: 'Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile. Veelgi mahukam lahendus on 2008. aastal tehtud Ugala teatri jaoks. Oleme eriliselt uhked tugeva koostöö üle Euroopa partneriga ja oma panuse eest Eesti kultuuri arendamisse.',
        description_en: 'In partnership with Dutch company Trekwerk we built a stage technique facilities. We have also constructed a larger version for Ugala theatre, which was built already in 2008. We are certainly proud of the contribution that has been made to the benefit of Estonia\'s culture.',
        description_ru: 'В сотрудничестве с голландской фирмой  в течении  1,5 лет изготовили и установили особую технику для сцены в театре  Vanemuine. Боллее мощный проект был осуществлен театре Угала',
        shortinfo_ee: 'Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile.',
        shortinfo_en: 'In partnership with Dutch company Trekwerk we built a stage technique facilities.',
        shortinfo_ru: 'В сотрудничестве с голландской фирмой  в течении  1,5 лет изготовили и установили особую технику для сцены в театре  Vanemuine.',
        image: 'img/projectPics/Vanemuine/vanemuineHead.jpg',
        pictures: ["img/projectPics/Vanemuine/vanemuine1.jpg", "img/projectPics/Vanemuine/vanemuine2.jpg", "img/projectPics/Vanemuine/vanemuine3.jpg", "img/projectPics/Vanemuine/vanemuine4.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project4', function (req, res) {
    project.create({
        name_ee: 'Bitestop',
        name_en: 'Bitestop',
        name_ru: 'Bitestop',
        subtitle_ee: 'Toitlustuskeskus',
        subtitle_en: 'Grocery stores',
        subtitle_ru: 'центр питания',
        years_ee: '2014',
        years_en: '2014',
        years_ru: '2014',
        description_ee: 'Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale. See tankla hõlmab endas ka söögikohta ja apteeki - väga Skandinaavialik ja mugav lahendus.',
        description_en: 'We built the electrical solutions for a roadstop gas station in Tartu, which includes a restaurant and a pharmacy.',
        description_ru: 'электрические решения были осуществлены на roadstop заправке на улице Рингтее в Тарту, которая объединяет аптеку и место питания.',
        shortinfo_ee: 'Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale.',
        shortinfo_en: 'We built the electrical solutions for a roadstop gas station in Tartu, which includes a restaurant and a pharmacy..',
        shortinfo_ru: 'электрические решения были осуществлены на roadstop заправке на улице Рингтее в Тарту, которая объединяет аптеку и место питания..',
        image: 'img/projectPics/Bitestop/bite1.jpg',
        pictures: ["img/projectPics/Bitestop/bite1.jpg", "img/projectPics/Bitestop/bite2.jpg", "img/projectPics/Bitestop/bite3.jpg", "img/projectPics/Bitestop/bite4.jpg", "img/projectPics/Bitestop/bite5.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project5', function (req, res) {
    project.create({
        name_ee: 'Nordic Digital',
        name_en: 'Nordic Digital',
        name_ru: 'Nordic Digital',
        subtitle_ee: 'Kontori -ja laopind',
        subtitle_en: 'Office and warehouse',
        subtitle_ru: 'Конторское и складное помещение',
        years_ee: '2014',
        years_en: '2014',
        years_ru: '2014',
        description_ee: 'Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all. 1200 m2 ruutmeetril on ruumi rohkem kui 100le töötajale, kes koordineerivad Photopointi poodide tööd.',
        description_en: 'For one of the leading wholesale operators in Estonia, we did electrical works for a new logistics center in Southern Estonia. 1200 m2 of area has the capacity for more than 100 people.',
        description_ru: 'создавали центр логиститки для ведущих оптовых предприятий Эстрнии, 1200 кв. Метра, на  100 рабочих мест, координация работы Photopoint магазинов',
        shortinfo_ee: 'Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all.',
        shortinfo_en: 'For one of the leading wholesale operators in Estonia, we did electrical works for a new logistics center in Southern Estonia.',
        shortinfo_ru: 'создавали центр логиститки для ведущих оптовых предприятий Эстрнии, 1200 кв.',
        image: 'img/projectPics/Nordic/nordic3.jpg',
        pictures: ["img/projectPics/Nordic/nordic1.jpg", "img/projectPics/Nordic/nordic2.png", "img/projectPics/Nordic/nordic3.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project6', function (req, res) {
    project.create({
        name_ee: 'Intrac Eesti',
        name_en: 'Intrac Estonia',
        name_ru: 'Intrac Eesti',
        subtitle_ee: 'äri -ja teenindushoone',
        subtitle_en: 'Office and service building',
        subtitle_ru: 'бизнес здание',
        years_ee: '2013-2016',
        years_en: '2013-2016',
        years_ru: '2013-2016',
        description_ee: 'Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks. See tugev Eesti ettevõte, mis pakub põllumajandus -ja metsamasinate müüki ja hooldust, asutas lisaks Tallinna, Pärnu, Saaremaa ja Jõhvi teeninduskeskusele uue hoone Lõuna-Eesti klientidele lahenduste pakkumiseks.',
        description_en: 'We excuted the electrical works for Intrac Estonia service center. The company deals in forest and agricultural machines and provides their service all over Sweden, Baltics and Poland.',
        description_ru: 'Проделаны электрические работы в Intrac Eesti бизнес здании. Это крупное предприятие Эстонии по продаже и обслуживанию лесной и сельско-хозяйственной техники.',
        shortinfo_ee: 'Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks.',
        shortinfo_en: 'We excuted the electrical works for Intrac Estonia service center.',
        shortinfo_ru: 'Проделаны электрические работы в Intrac Eesti бизнес здании.',
        image: 'img/projectPics/Intrac/intrac3.jpg',
        pictures: ["img/projectPics/Intrac/intrac1.jpg", "img/projectPics/Intrac/intrac2.jpg", "img/projectPics/Intrac/intrac3.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project7', function (req, res) {
    project.create({
        name_ee: 'Jakobi 25',
        name_en: 'Jakobi st 25',
        name_ru: 'Jakobi 25',
        subtitle_ee: 'Korterelamu',
        subtitle_en: 'apartment building',
        subtitle_ru: 'квартирное здание',
        years_ee: '2013',
        years_en: '2013',
        years_ru: '2013',
        description_ee: '10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias. Miljööväärtuslikus piirkonnas ehitatud hoones tegime elektrilahendused nii korteritele kui ka äripindadele.',
        description_en: 'This 10 apartment house was announced as a best new building established in a historical area by Tartu City Council in 2015. We built the electrical solutions for the flats and office spaces.',
        description_ru: 'здание  с 10 квартирами признано горуправой в 2015 году лучшей новой постройкой в исторической части города Тарту.',
        shortinfo_ee: '10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias.',
        shortinfo_en: 'This 10 apartment house was announced as a best new building established in a historical area by Tartu City Council in 2015.',
        shortinfo_ru: 'здание  с 10 квартирами признано горуправой в 2015 году лучшей новой постройкой в исторической части города Тарту.',
        image: 'img/projectPics/Jakobi/Jakobi5.jpg',
        pictures: ["img/projectPics/Jakobi/Jakobi1.jpg", "img/projectPics/Jakobi/Jakobi2.jpg", "img/projectPics/Jakobi/Jakobi3.jpg", "img/projectPics/Jakobi/Jakobi4.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

router.post('/test/project8', function (req, res) {
    project.create({
        name_ee: 'Hotell Tartu',
        name_en: 'Hotel Tartu',
        name_ru: 'Отель Тарту',
        subtitle_ee: 'Juurdeehitus',
        subtitle_en: 'Extenison',
        subtitle_ru: 'пристройка',
        years_ee: '2016-2017',
        years_en: '2016-2017',
        years_ru: '2016-2017',
        description_ee: 'Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond. Tööde toimumise aeg 2016 - 2017 aasta.',
        description_en: 'For extensions to the hotel in the city center of Tartu, the electrical works were provided by our company. The works started in 2016 and ended in 2017.',
        description_ru: 'Наша команда отвечала за электрические работы пристройки отеля Тарту.',
        shortinfo_ee: 'Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond.',
        shortinfo_en: 'For extensions to the hotel in the city center of Tartu, the electrical works were provided by our company.',
        shortinfo_ru: 'Наша команда отвечала за электрические работы пристройки отеля Тарту.',
        image: 'img/projectPics/Hotel/hotel5.jpg',
        pictures: ["img/projectPics/Hotel/hotel1.jpg", "img/projectPics/Hotel/hotel2.jpg", "img/projectPics/Hotel/hotel3.jpg", "img/projectPics/Hotel/hotel4.jpg", "img/projectPics/Hotel/hotel5.jpg"]
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    });
})

// TODO: END

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

router.get('/test/project/:id', function(req, res){
    project.findOne({
        _id: req.params.id
    }, function(err, product){
        if(err) {
            res.send(err);
        } else {
            res.json(product);
        }
    })
});

router.post('/test/project/update/:id', function(req, res){
    project.findOne({
        _id: req.params.id
    }, function(err, product){

        var key = req.body.column;
        var dynSet = {$set: {}};
        dynSet.$set[key] = req.body.value;

        product.update(dynSet, function(err, cb) {
            console.log(cb);
            if (err) res.send(err);
            res.json({
                msg: "The field {" + key + "} was successfully updated with text -> {" + req.body.value + "}."
            });
        });
    })
});



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

router.post('/product/picture', upload.single('file'), function(req, res){
    console.log(req.file);
    Picture.create({
        picture: req.file.path
    })
    var str = req.file.path;

    var correctPath = str.replace(/\/data02\/virt61426\/domeenid\/www.elektronet.ee\/elektrosystem-final\/client\//, '../');

    // TODO: This should not be pushed into github
    // correctPath = str.replace('/Users/jkniest/Documents/Development/webstate/elektrosystem-final/client/', '../');
    // TODO: End

    res.json(correctPath);
})

router.post('/user/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
});

router.get('/user/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

router.get('/user/status', function(req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
});


module.exports = router;
