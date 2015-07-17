/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var trnyArr = [];

// Get list of tournaments
exports.index = function(req, res) {
  res.json([]);
};

exports.add = function(req, res){
  //console.log(res, req, req.body, res.body);
  var trny = req.body.trny;
  trnyArr.push(trny);
  console.log("Added " + trny.name + " list now " + trnyArr);
};
