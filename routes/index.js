var express = require('express');
var router = express.Router();

var indexcontroller = require('../controllers/indexcontroller');


router.get('/', indexcontroller.homepage);


router.get('/about',indexcontroller.about);

router.get('/contact',indexcontroller.contact);

router.get('/projects',indexcontroller.projects);

router.get('/service',indexcontroller.service);


module.exports = router;
