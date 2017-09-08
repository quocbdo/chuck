var Joke = require('../models/Joke');
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function saveJoke(req, res) {
  var joke = new Joke(req.body);
  joke.save(function(err) {
    User.findById(req.user._id, function(err, user) {
      user.jokes.push(joke._id);
      user.save(function(err) {
        res.json(joke);
      });
    });
  });
}

function jokeIndex(req, res) {
  User.findById(req.user._id).populate('jokes')
  .then(user => {
    console.log(user.jokes)
    res.json(user.jokes)
  });
}

// function deleteJoke (req, res) {
//   User.findById(req.user_id)
// }

module.exports = {
  saveJoke: saveJoke,
  index: jokeIndex
};