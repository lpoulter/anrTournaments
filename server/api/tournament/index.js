'use strict';

var express = require('express');
var controller = require('./tournament.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.add);

module.exports = router;
