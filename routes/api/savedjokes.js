var express = require('express');
var router = express.Router();
var savedjokesCtrl = require('../../controllers/savedjokes');

/*---------- Protected Routes ----------*/

// Protect this route with custom middleware
// router.get('/', checkAuth, savedjokesCtrl.index);
router.post('/', checkAuth, savedjokesCtrl.saveJoke);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authorized'});
}

module.exports = router;