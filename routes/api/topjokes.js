var express = require('express');
var router = express.Router();
var topjokesCtrl = require('../../controllers/topjokes');

/*---------- Protected Routes ----------*/

// Protect this route with custom middleware
router.get('/', checkAuth, topjokesCtrl.index);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authorized'});
}

module.exports = router;